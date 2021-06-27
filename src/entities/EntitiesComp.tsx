import { FC, useState } from 'react';
import { EntitiesTile } from './EntitiesTile'
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../reducers'
import { IUsersReducer } from '../reducers/usersReducers'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 40px;
`;

export const EntitiesComp: FC = () => {

    const { commentsList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const currentPost = commentsList.slice(0, 30)
    
    return (
        <Wrapper>
            <EntitiesTile
                posts={currentPost}
            />
        </Wrapper>
    )
}


