import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../@core/shared/store/state/app.state';
import {DecrementCounter, IncrementCounter, ResetCounter} from '../../@core/shared/store/actions/counter.actions';
import {selectCounter} from '../../@core/shared/store/selectors/count.selector';
import {MediaChange, MediaObserver} from '@angular/flex-layout';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;
  media$: Observable<MediaChange[]>;

  constructor(
    private store: Store<IAppState>,
    public media: MediaObserver,
  ) {
    this.count$ = this.store.pipe(select(selectCounter));
   this.media$ = media.asObservable();
   this.media$.subscribe((d: MediaChange[]) => {
     console.log(d);
   });
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
