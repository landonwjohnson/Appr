import { createStore, combineReducers } from 'redux';
import authRouter from './ducks/auth.reducer';
import dashboardInfo from './ducks/dashboardInfo.reducer';
import projectInfo from './ducks/projectInfo.reducer';
import userInfo from './ducks/userInfo.reducer';


let rootReducer = combineReducers({
    dashboardInfo,
    projectInfo,
    userInfo,
    authRouter
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );