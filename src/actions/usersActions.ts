import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/actionTypes';
import { ISingleUser } from '../entities/users';
import { ISingleComment } from '../entities/comments';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
}) as any;

export const getComments = (): Promise<ISingleComment[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((commentsList: ISingleComment[]) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                commentsList
            })
        })
}) as any;

export const getSomeData = (someData: any): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    dispatch({
        type: actionTypes.PUSH_DATA,
        someData        
    })
    console.log(someData)
}) as any;