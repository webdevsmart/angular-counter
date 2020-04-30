import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSlotComponent } from './counter-slot.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectValueA, selectValueB, State } from '../../../reducers';
import { MemoizedSelector, Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CounterSlotComponent', () => {
  let component: CounterSlotComponent;
  let fixture: ComponentFixture<CounterSlotComponent>;


  let mockStore: MockStore<State>;
  let mockCountASelector: MemoizedSelector<State, number>;
  let mockCountBSelector: MemoizedSelector<State, number>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterSlotComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    mockStore = TestBed.get(Store);
    mockCountASelector = mockStore.overrideSelector(selectValueA, -5);
    mockCountBSelector = mockStore.overrideSelector(selectValueB, 10);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
