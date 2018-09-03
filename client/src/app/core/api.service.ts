import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';

export class Interes {
  id: number;
  title: string;
}

const INTERESTS: Interes[] = [{ id: 1, title: 'Рисование' }, { id: 2, title: 'Музыка' }, { id: 3, title: 'Танцы' }];

@Injectable()
export class ApiService {
  constructor() {}

  getInterests(): Observable<Interes[]> {
    return of(INTERESTS);
  }

  addInterest(item: Interes) {
    if (!INTERESTS.find(a => a.title === item.title)) {
      INTERESTS.push(item);
    }
  }
}
