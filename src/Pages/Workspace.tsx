import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import {WorkspaceComp} from '../components/Workspace/WorkspaceComp'

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
export const Workspace: FC = () => {
    return (
        <Wrapper>
            <WorkspaceComp/>
        </Wrapper>
    )
}
