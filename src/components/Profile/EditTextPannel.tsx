import React, { MouseEvent } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

import { EditText, } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'
import { getSomeData } from '../../actions/usersActions'

type GetSomeData = ReturnType<typeof getSomeData>

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 40%;
h3{
    padding: 20px 0;
}
button{
    width: 20px;
    height: 20px;
    text-align:center;
    padding: 0;
}
div > div{
    display: inline-block;
    background-color:#8cc9ffae;
    width: auto;
    border-radius: 5px;
    padding: 5px 8px
}
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

export const EditTextPannel: FC = () => {
    const dispatch = useDispatch();
    const { usersList, someData } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const [text, setText] = React.useState(
        'Loading...'
    );

    const handleSave = ({ name, value }: any) => {
        someData[name] = value;
        dispatch<GetSomeData>(getSomeData(someData))
    };
    const inputHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const divElement = document.createElement(EmailInformation)
        document.appendChild(divElement)
    }

    if (usersList.length == 0) return null
    return (
        <Wrapper>
            <h3>Expertise</h3>
            <div style={{ whiteSpace: 'nowrap' }}>
                <EditText id="expertise" name="6" defaultValue={someData[6]} inline
                    onChange={setText}
                    onSave={handleSave}
                />
            </div>
            <h3>Specialties</h3>
            <div style={{ whiteSpace: 'nowrap' }}>
                <EditText id="specialties" name="7" defaultValue={someData[7]} inline
                    onChange={setText}
                    onSave={handleSave}
                />
            </div>
            <h3>Admission to practise law</h3>
            <div style={{ whiteSpace: 'nowrap' }}>
                <EditText id="admission" name="8" defaultValue={someData[8]} inline
                    onChange={setText}
                    onSave={handleSave}
                />
            </div>
            <h3>Countries</h3>
            <div style={{ whiteSpace: 'nowrap' }}>
                <EditText id="countries" name="9" defaultValue={someData[9]} inline
                    onChange={setText}
                    onSave={handleSave}
                />
            </div>
        </Wrapper>
    );
}

