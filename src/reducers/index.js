import { combineReducers } from 'redux';
import dataReducer from './reducer_data';


const rootReducer = combineReducers({
	dataState:dataReducer
});

export default rootReducer;
