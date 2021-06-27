import { FC, useState, ChangeEvent, useEffect } from 'react';
import {
    FaHome,
    FaUserFriends,
    FaNewspaper,
    FaRegBuilding
} from 'react-icons/fa';
import {
    HiLogout
} from 'react-icons/hi'
import {
    GrUserSettings,
    GrUserNew
} from 'react-icons/gr'
import {
    NavDropdownBox,
    DropdownTitle,
    DropDownWrapper,
    DropDownText,
    DropdownSearchInput
} from './TopBar.elements'
import { getUsers } from '../../actions/usersActions';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'
import styled from 'styled-components';

const Profile = styled.div`
img{
    max-width: 30px;
    max-height:30px;
    border-radius:50%;
    padding-right: 5px;
}
`;

export const ExpandedMenu: FC = () => {
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    const { usersList, someData, commentsList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    return (
        <NavDropdownBox>
            <DropdownSearchInput name="search" type="search" placeholder="Filter..." value={inputText} onChange={inputHandler} />
            <DropdownTitle>Platform</DropdownTitle>
            {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaHome />
                    <DropDownText to="/">Home</DropDownText>
                </DropDownWrapper>
            }
            {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaNewspaper />
                    <DropDownText to="/404">Publications</DropDownText>
                </DropDownWrapper>
            }
            {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaUserFriends />
                    <DropDownText to="/404">People</DropDownText>
                </DropDownWrapper>
            }
            {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaRegBuilding />
                    <DropDownText to="/entities">Entities</DropDownText>
                </DropDownWrapper>
            }
            {'Administrator'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaHome />
                    <DropDownText to="/404">Administrator</DropDownText>
                </DropDownWrapper>
            }
            <DropdownTitle>Workspaces</DropdownTitle>
            {'Client contact'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaHome />
                    <DropDownText to="/404">Client contact</DropDownText>
                </DropDownWrapper>
            }
            {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaNewspaper />
                    <DropDownText to="/404">Supplier contract</DropDownText>
                </DropDownWrapper>
            }
            {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaUserFriends />
                    <DropDownText to="/404">Corporate</DropDownText>
                </DropDownWrapper>
            }
            {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaRegBuilding />
                    <DropDownText to="/404">Group Norms</DropDownText>
                </DropDownWrapper>
            }
            {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <FaHome />
                    <DropDownText to="/404">Real estate contracts</DropDownText>
                </DropDownWrapper>
            }
            <DropdownTitle>Account</DropdownTitle>
            {'Profile'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <Profile>
                        <img src="./media/profilePicture.jpg"></img>

                    </Profile>
                    <DropDownText to="/Profile">
                        <span>{usersList[0].name}</span>
                        <span>See profile</span>
                    </DropDownText>
                </DropDownWrapper>
            }
            {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <GrUserNew />
                    <DropDownText to="/404">Privacy</DropDownText>
                </DropDownWrapper>
            }
            {'Settings'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <GrUserSettings />
                    <DropDownText to="/404">Settings</DropDownText>
                </DropDownWrapper>
            }
            {'Logout'.toLowerCase().includes(inputText.toLowerCase()) &&
                <DropDownWrapper>
                    <HiLogout />
                    <DropDownText to="/404">Logout</DropDownText>
                </DropDownWrapper>
            }
        </NavDropdownBox>
    )
}