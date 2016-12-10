import { fork } from 'redux-saga/effects' 
import { counter } from './saga_counter_action'

export default function* rootSaga() {
	yield fork(counter)
}