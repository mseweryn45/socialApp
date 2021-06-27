import React, { useEffect } from 'react'
import styled from 'styled-components';
import { FC } from 'react';
import { LastPublication } from "../components/LastPublication/LastPublication";
import { SimpleSlider } from "../components/Carousel/Carousel"
import { YourWork } from "../components/YourWork/YourWork"
import { getUsers, getComments } from '../actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
type GetUsers = ReturnType<typeof getUsers>;
type GetComments = ReturnType<typeof getComments>;

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
    `;

export const HomePage: FC = () => {
    
    
    return (
        <Wrapper>
            <LastPublication />
            <SimpleSlider />
            <YourWork />
        </Wrapper>
    )
}

