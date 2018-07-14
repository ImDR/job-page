import { LOAD_LOCATIONS, ADD_TO_DROPOFF, ADD_TO_PICKUP, LOCATION_ON_CHANGE, ADD_LOCATION } from './types';


export function loadLocations() {
    return (dispatch) => {
        dispatch({
            type: LOAD_LOCATIONS,
            payload: [{
                id: 'A001',
                name: 'COCA-COLA Gurgaon',
                locationIncharge: 'Ramesh Singh',
                address: 'Sec - 1001, Delhi Road, Guragon ',
                phone: '9876543210'
            }]
        });
    };
}

export function addToPickup(id){
    return (dispatch)=>{
        dispatch({
            type: ADD_TO_PICKUP,
            payload: id
        })
    }
}

export function addToDrop(id){
    return (dispatch)=>{
        dispatch({
            type: ADD_TO_DROPOFF,
            payload: id
        })
    }
}

export function onChange(event) {
    return (dispatch) => {
        dispatch({
            type: LOCATION_ON_CHANGE,
            payload: {[event.target.name] : event.target.value}
        });
    };
}

export function onSubmit(event){
    event.preventDefault();
    return (dispatch, getState) => {
        let state = getState();
        let { locations } = state;
        dispatch({
            type: ADD_LOCATION,
            payload: locations.form
        })
    }
}