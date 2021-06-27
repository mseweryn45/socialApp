import React, { Component, useEffect, useState } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'
import { getSomeData } from '../../actions/usersActions'

type GetSomeData = ReturnType<typeof getSomeData>

const Wrapper = styled.div`
display: flex;
width: 40%;
`;
const MainInformation = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 50%;
`;
const EmailInformation = styled(MainInformation)`
justify-content: flex-end;
width: 50%;
> div{
    padding-top: 15px ;
}
`;

export const Example: FC = () => {
    const dispatch = useDispatch();
    const { usersList, someData } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const [text, setText] = React.useState(
        'Loading...'
    );

    if (usersList.length !== 0) {
        someData[0] = usersList[0].name;
        someData[1] = usersList[0].company.name;
        someData[2] = usersList[0].address.city;
        someData[3] = usersList[0].username;
        someData[4] = usersList[0].email;
        someData[5] = usersList[0].phone;
    }

    const handleSave = ({ name, value }: any) => {
        someData[name] = value;
        dispatch<GetSomeData>(getSomeData(someData))
    };

    if (usersList.length == 0) return null
    return (
        <Wrapper>
            <MainInformation>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <EditText id="fullName" name="0" defaultValue={usersList[0].name} inline

                        onChange={setText}
                        onSave={handleSave}
                    />
                </div>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <EditText id="company" name="1" defaultValue={usersList[0].company.name} inline

                        onChange={setText}
                        onSave={handleSave}
                    />
                </div>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <EditText id="location" name="2" defaultValue={usersList[0].address.city} inline

                        onChange={setText}
                        onSave={handleSave}
                    />
                </div>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <EditText id="username" name="3" defaultValue={usersList[0].username} inline
                        onChange={setText}
                        onSave={handleSave}
                    />
                </div>
            </MainInformation>
            <EmailInformation>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <EditText name="4" type="email" style={{ width: '200px' }} defaultValue={usersList[0].email} inline

                        onChange={setText}
                        onSave={handleSave}
                    />
                </div>
                <div style={{ whiteSpace: 'nowrap' }}>
                    <EditText name="5" type="tel" style={{ width: '200px' }} defaultValue={usersList[0].phone} inline

                        onChange={setText}
                        onSave={handleSave}
                    />
                </div>
            </EmailInformation>

        </Wrapper>
    );
}

