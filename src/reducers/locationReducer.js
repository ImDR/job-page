import { LOAD_LOCATIONS, LOCATION_ON_CHANGE, ADD_LOCATION } from '../actions/types';


let initialState = {
    items:[],
    form:{
        id: '',
        name: '',
        locationIncharge: '',
        address: '',
        phone: ''
    }
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LOCATIONS:
            return {
                ...state,
                items: [...state.items, ...action.payload]
            }
        case LOCATION_ON_CHANGE:
            return {
                ...state,
                form: { ...state.form, ...action.payload }
            }
        case ADD_LOCATION:
            return {
                ...state,
                items: [...state.items, action.payload],
                form: initialState.form
            }
        default:
            return state
    }
}

export default locationReducer;