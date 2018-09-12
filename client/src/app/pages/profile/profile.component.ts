import { Component, OnInit } from '@angular/core';
import { Interest } from '@app/core/types';
import { Observable } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material';
import { ContentDialogComponent } from '@app/shared/content-dialog/content-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['text', 'weight', 'cdate', 'access', 'controls'];
  coll$: Observable<Interest[]>;

  constructor(private as: AngularFirestore, private auth: AngularFireAuth, public dialog: MatDialog) {}

  ngOnInit() {
    this.coll$ = this.auth.user.pipe(
      switchMap(user =>
        this.as.collection<Interest>('interests', ref => ref.where('user_uid', '==', user.uid)).valueChanges()
      )
    );
  }

  _changeWeight(e, el: Interest) {
    const value = e.target.value;
    el.weight = value < 0 ? 0 : value > 10 ? 10 : value;
    e.target.value = el.weight;
    this.as.doc<Interest>(`interests/${el.id}`).set(el);
  }

  _access(el: Interest) {
    el.access = 'public';
    this.as.doc<Interest>(`interests/${el.id}`).set(el);
  }

  _delete(el: Interest) {
    const dialogRef = this.dialog.open(ContentDialogComponent, {
      data: {
        title: 'Вы уверены?',
        text: 'Интерес будет удален.',
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter(result => result))
      .subscribe(() => {
        const doc = this.as.doc<Interest>(`interests/${el.id}`);
        doc.delete().catch(error => console.log(error));
      });
  }
}
