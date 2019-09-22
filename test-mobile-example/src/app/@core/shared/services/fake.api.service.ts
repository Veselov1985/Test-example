import { Injectable } from '@angular/core';
import {FAKE_API} from './fake-api.data';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class FakeApiService {

  constructor() {}

  public post(name: string): Observable<any> {
    return of(FAKE_API[name])
      .pipe(delay(3000));
  }

  public pay(params): Observable<boolean> {
    return of(Math.random() >= 0.5)
      .pipe(delay(3000));
  }

}
