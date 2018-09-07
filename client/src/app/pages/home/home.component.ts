import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudOptions, CloudData, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Interes } from '@app/core/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  options: CloudOptions = {
    width: 1000,
    height: 400,
    overflow: false,
  };

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.3,
    transitionTime: 0.4,
  };

  interests$: Observable<CloudData[]>;

  constructor(private as: AngularFirestore, private router: Router) {
    this.interests$ = this.as
      .collection<CloudData>('interests')
      .valueChanges()
      .pipe(map(actions => actions.filter((a: Interes) => a.access === 'public')));
  }

  ngOnInit() {}

  ngOnDestroy(): void {}

  logClicked(clicked: Interes) {
    this.router.navigate(['interes', clicked.id]);
  }
}
