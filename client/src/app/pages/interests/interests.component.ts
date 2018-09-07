import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Interes } from '../../core/types';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  interests$: Observable<Interes[]>;

  @ViewChild('title')
  title: ElementRef;
  constructor() {}

  ngOnInit(): void {}

}
