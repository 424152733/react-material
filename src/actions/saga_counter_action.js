import { fork, call, put, take, select } from 'redux-saga/effects';
import { counterInc, counterDec, COUNTER_INC, COUNTER_DEC} from '../constants/action-type'

function* inc() {
	while(true) {
		yield take(COUNTER_INC)
		yield put(counterInc())
	}
}

function* dec() {
	while(true) {
		yield take(COUNTER_DEC)
		yield put(counterDec())
	}
}