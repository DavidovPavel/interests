import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Interest } from '@app/core/types';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  expanded = false;

  constructor(public afAuth: AngularFireAuth, private store: AngularFirestore, private router: Router) {}

  add = new FormControl('', Validators.required);

  ngOnInit() {}

  _add() {
    if (this.add.valid) {
      this.expanded = false;

      const id = this.store.createId();
      const text = this.add.value;
      const user_uid = this.afAuth.auth.currentUser.uid;
      const cdate = new Date();

      this.store
        .collection<Interest>('interests')
        .doc<Interest>(id)
        .set({ id, text, user_uid, cdate, weight: 0, access: 'protected' })
        .then(() => {
          this.add.reset();
          this.router.navigate(['interest', id]);
        });
    }
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
