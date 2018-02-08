import { createStore, combineReducers } from 'redux';
import projectInfo from './ducks/projectInfo.reducer';

const rootReducer = combineReducers({
    projectInfo
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );