import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TitleBus {
  private titleValues = new BehaviorSubject<string>('Start');

  updateTitle(title: string) {
    this.titleValues.next(title);
  }

  title(): Observable<string> {
    return this.titleValues.asObservable();
  }
}
