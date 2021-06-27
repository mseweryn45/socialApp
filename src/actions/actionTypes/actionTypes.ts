import { ISingleUser } from '../../entities/users';
import { ISingleComment } from '../../entities/comments';

export const GET_USERS = 'GET_USERS';
export const GET_COMMENTS = "GET_COMMENTS";
export const PUSH_DATA = "PUSH_DATA";


export interface IUserTypes {
    GET_USERS: {
        usersList: ISingleUser[];
    }
    GET_COMMENTS: {
        commentsList: ISingleComment[];
    }
    PUSH_DATA: {
        someData: string;
    }
}