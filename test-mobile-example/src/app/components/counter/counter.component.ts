import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {increment, decrement, reset} from '../../@core/shared/store/actions';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
count$!: Observable<boolean>;
  constructor(
    private store: Store<{count: number}>,
  ) {
    this.count$ = store.pipe(
      tap((s) => console.log(s)),
      select('counter'));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment);
  }
  decrement() {
    this.store.dispatch(decrement);
  }
  reset() {
    this.store.dispatch(reset);
  }

}
