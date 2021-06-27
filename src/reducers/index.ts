import { combineReducers } from 'redux';  //aby połączyć pliki reducerowe w jeden

import users, { IUsersReducer } from './usersReducers';
// import users2, { IUsers2Reducer } from './users2Reducers';

export default combineReducers({
    users//,
    //users2
})

export interface IState {
    users: IUsersReducer;
    //users2: IUsers2Reducer;
}