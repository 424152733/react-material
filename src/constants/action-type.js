import { createAction } from 'redux-actions';

export const COUNTER_INC = 'COUNTER_INC';
export const COUNTER_DEC = 'COUNTER_DEC';
export const counterInc = createAction(COUNTER_INC);
export const counterDec = createAction(COUNTER_DEC);
