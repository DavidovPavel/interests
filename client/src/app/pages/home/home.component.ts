import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudOptions, CloudData, ZoomOnHoverOptions } from 'angular-tag-cloud-module';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Interest } from '@app/core/types';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

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
      .collection<CloudData>('interests', ref => ref.where('access', '==', 'public'))
      .valueChanges()
      .pipe(
        map(ws =>
          ws.map(w => {
            const color = this.getRandomColor();
            return { color, ...w };
          })
        )
      );
  }

  ngOnInit() {}

  ngOnDestroy(): void {}

  logClicked(clicked: Interest) {
    this.router.navigate(['interest', clicked.id]);
  }

  getRandomColor(): string {
    const letters = 'ABCDEF0123456789';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
