import { JOB_ON_CHANGE, REMOVE_PICKUP, REMOVE_DROPOFF } from './types';


export function onChange(event) {
    return (dispatch) => {
        dispatch({
            type: JOB_ON_CHANGE,
            payload: {[event.target.name] : event.target.value}
        });
    };
}

export function removePickup(id) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PICKUP,
            payload: id
        });
    };
}

export function removeDropoff(id) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_DROPOFF,
            payload: id
        });
    };
}