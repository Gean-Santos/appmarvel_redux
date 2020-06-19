import {combineReducers} from 'redux';


import herosReducers from './reducers/herosReducer';

const rootReducer = combineReducers({
  content: herosReducers
});

export default rootReducer;
