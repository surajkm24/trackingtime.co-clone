import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './Auth/auth.reducer';

// Combining reducers 
const rootReducer = combineReducers({
    auth: authReducer
})

// Creating redux store for maintaining authentication
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));