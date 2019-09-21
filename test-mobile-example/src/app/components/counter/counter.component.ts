import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../@core/shared/store/state/app.state';
import {DecrementCounter, IncrementCounter, ResetCounter} from '../../@core/shared/store/actions/counter.actions';
import {map, tap} from 'rxjs/operators';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$!: Observable<boolean>;

  constructor(
    private store: Store<IAppState>,
  ) {
    this.count$ = this.store.pipe(
      tap(r => {
        console.log(r);
      }),
      select('counter'),
      map(counter => counter.counter)
    );
  }

  ngOnInit() {
  }


  increment() {
    this.store.dispatch(new IncrementCounter());
  }

  decrement() {
    this.store.dispatch(new DecrementCounter());
  }

  reset() {
    this.store.dispatch(new ResetCounter());
  }
}
