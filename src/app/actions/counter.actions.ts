import { createAction } from '@ngrx/store';

export const changeCounter = createAction(
  '[Counter] Change',
);

export const increaseCounter = createAction(
  '[Counter] Increase',
);

export const decreaseCounter = createAction(
  '[Counter] Decrease',
);

export const startCounter = createAction(
  '[Counter] Start'
);

export const stopCounter = createAction(
  '[Counter] Stop'
);

export const resetCounter = createAction(
  '[Counter] Reset'
);
