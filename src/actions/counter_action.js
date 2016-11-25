export const COUNTER_INC = 'COUNTER_INC';
export const COUNTER_DEC = 'COUNTER_DEC';

export function inc() {
	return (dispatch) => {
		dispatch({
		  type: COUNTER_INC
		})		
	}
}

export function dec() {
	return (dispatch) => {
		dispatch({
		  type: COUNTER_DEC
		})
	}
}
