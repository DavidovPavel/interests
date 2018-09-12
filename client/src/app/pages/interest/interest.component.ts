import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Interest, Post } from '@app/core/types';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap, delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
  interest_uid: string;
  item$: Observable<Interest>;
  posts$: Observable<Post[]>;

  @ViewChild('fileUploadInput')
  fileUploadInput;

  uploadPercent: Observable<number>;

  post = new FormControl();

  constructor(
    private auth: AngularFireAuth,
    private as: AngularFirestore,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.interest_uid = this.route.snapshot.paramMap.get('id');
    this.item$ = this.as.doc<Interest>(`interests/${this.interest_uid}`).valueChanges();
    const storage = this.storage;
    this.posts$ = this.as
      .collection<Post>('posts', ref => ref.where('interest_uid', '==', this.interest_uid).orderBy('cdate', 'desc'))
      .valueChanges()
      .pipe(
        map(ps =>
          ps.map(p => {
            const file_url$ = p.file_uid ? storage.ref(p.file_uid).getDownloadURL() : null;
            return { file_url$, ...p };
          })
        )
      );
  }

  _getPhoto(post: Post) {
    if (post.file_uid) {
      return this.storage.ref(post.file_uid).getDownloadURL();
    }
  }

  _addFile() {
    this.fileUploadInput.nativeElement.click();
  }

  createPost(text: string, file_uid: string = null) {
    const id = this.as.createId();
    const cdate = new Date();
    const user_uid = this.auth.auth.currentUser.uid;
    const interest_uid = this.interest_uid;

    this.as
      .collection<Post>('posts')
      .doc<Post>(id)
      .set({ id, text, user_uid, cdate, interest_uid, file_uid })
      .then(() => {
        this.post.reset();
        this.fileUploadInput.nativeElement.value = '';
      });
  }

  _send() {
    const text = this.post.value;
    const files = this.fileUploadInput.nativeElement.files;

    if (files.length) {
      const file = files.item(0);
      const filePath = this.as.createId();
      const task = this.storage.upload(filePath, file);

      this.uploadPercent = task.percentageChanges().pipe(map(value => (value === 100 ? 0 : value)));

      task
        .snapshotChanges()
        .pipe(finalize(() => this.createPost(text, filePath)))
        .subscribe();
    } else if (this.post.value) {
      this.createPost(text);
    }
  }
}
