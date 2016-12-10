import {
  COUNTER_INC,
  COUNTER_DEC
} from '../constants/action-type';
import createReducer from '../store/create-reducers'

const initialState = {
	count: 5
}
const actionHandlers = {
	[COUNTER_INC]: (state) => {	
		return { count: state.count + 1}
	},

	[COUNTER_DEC]: (state) => {
		return { count: state.count - 1 }
	}
}

export default createReducer(initialState, actionHandlers)