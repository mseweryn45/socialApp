import { ISingleUser } from '../entities/users';
import { ISingleComment } from '../entities/comments';
import * as actionTypes from '../actions/actionTypes/actionTypes';

export interface IUsersReducer {
    usersList: ISingleUser[];
    commentsList: ISingleComment[];
    someData: any;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    commentsList: [],
    someData: [
        "name",
        "company",
        "adress",
        "user",
        "email",
        "phone",
        "Mergers and acuisition",
        "Cross border operation",
        "Paris bar association",
        "Tunisia"
    ]
})


export default (state = defaultState(), action: any) => {
    console.log(state)
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes["GET_USERS"] = action;
            return {
                ...state,
                usersList: data.usersList
            }
        }

        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.IUserTypes["GET_COMMENTS"] = action;
            return {
                ...state,
                commentsList: data.commentsList
            }
        }

        case actionTypes.PUSH_DATA: {
            const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
            console.log(data.someData)
            const users = [...state.usersList];
            
            users[0].name = `${data.someData[0]}`;
            users[0].company.name = `${data.someData[1]}`;
            users[0].address.city = `${data.someData[2]}`;
            users[0].username = `${data.someData[3]}`;
            users[0].email = `${data.someData[4]}`;
            users[0].phone = `${data.someData[5]}`;
            
            return {
                ...state,
                someData: data.someData,
                usersList: users,
            }
        }

        default: {
            return state
        }
    }
}