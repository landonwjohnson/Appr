import { createStore, combineReducers } from 'redux';
import themeReducer from './ducks/theme.reducer';

combineReducers({
    themeReducer
})


export default createStore( combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );