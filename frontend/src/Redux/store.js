import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './Auth/auth.reducer';
import { projectReducer } from './Projects/project.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));