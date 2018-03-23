import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Interes, ApiService } from '../api.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  interests$: Observable<Interes[]>;

  @ViewChild('title') title: ElementRef;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.interests$ = this.api.getInterests();
  }

  add(value: string) {
    if (value.trim) {
      this.api.addInterest({ title: value } as Interes);
      this.title.nativeElement.value = '';
    }
  }

  delete(){
    // zzz 
  }
}
