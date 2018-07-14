import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
    job: jobReducer,
    locations: locationReducer
});

export default rootReducer;