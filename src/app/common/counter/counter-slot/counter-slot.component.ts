import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as root from '../../../reducers/index';
import { resetCounter, startCounter, stopCounter } from '../../../actions/counter.actions';

@Component({
  selector: 'app-counter-slot',
  templateUrl: './counter-slot.component.html',
  styleUrls: ['./counter-slot.component.scss']
})
export class CounterSlotComponent implements OnInit {

  countA$ = this.store.pipe(select(root.selectValueA));
  countB$ = this.store.pipe(select(root.selectValueB));

  constructor(
    private store: Store<root.State>
  ) {
  }

  ngOnInit(): void {
  }

  start() {
    this.store.dispatch(startCounter());
  }

  stop() {
    this.store.dispatch(stopCounter());
  }

  reset() {
    this.store.dispatch(resetCounter());
  }

}
