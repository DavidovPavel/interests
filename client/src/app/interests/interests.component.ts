import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Interes, ApiService } from '../api.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests$: Observable<Interes[]>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.interests$ = this.api.getInterests();
  }

}
