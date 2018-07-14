import { JOB_ON_CHANGE, ADD_TO_DROPOFF, ADD_TO_PICKUP, REMOVE_PICKUP, REMOVE_DROPOFF } from '../actions/types';


let initialState = {
    name: '',
    pickupDate: '',
    expectedPrice: '',
    expectedDelivery: '',
    pickups: [],
    drops: []
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOB_ON_CHANGE:
            return {
                ...state,
                ...action.payload
            }
        case ADD_TO_PICKUP:
            return {
                ...state,
                pickups: [...state.pickups, action.payload]
            }
        case ADD_TO_DROPOFF:
            return {
                ...state,
                drops: [...state.drops, action.payload]
            }
        case REMOVE_PICKUP:
            state.pickups.splice(state.pickups.indexOf(action.payload),1)
            return {
                ...state,
                pickups: state.pickups
            }
        case REMOVE_DROPOFF:
            state.drops.splice(state.drops.indexOf(action.payload),1)
            return {
                ...state,
                drops: state.drops
            }
        default:
            return state
    }
}

export default jobReducer;