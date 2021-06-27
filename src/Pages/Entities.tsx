import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { EntitiesComp } from '../entities/EntitiesComp';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0 0 30px;
    width: calc(100% - 330px);
    @media screen and (max-width: 960px)
    {
        width: 100%;
        margin: 0;
    }
    h1{
        font-size: 1.8rem;
    }
    `;
export const Entities: FC = () => {
    return (
        <Wrapper>
            <h1>Entities</h1>
            <EntitiesComp />
        </Wrapper>
    )
}
