import { FC } from 'react';
import { FaUserFriends, FaUserPlus, FaNewspaper, FaPlus, FaRegBuilding, FaCodeBranch, FaFileAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';

import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'
import {
    LeftMenuContainer,
    ProfileBox,
    TopBox,
    Image,
    ProfileName,
    ProfilePosition,
    TextWrapper,
    Text,
    TextWrapperBottom
} from "./LeftMenu.elements"


export const LeftMenu: FC = () => {
    const { usersList, someData, commentsList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))
    if (usersList.length == 0) return null
    return (
        <LeftMenuContainer>
            <ProfileBox>
                <TopBox>
                    <Image ></Image>
                    <ProfileName>{usersList[0].name}</ProfileName>
                    <ProfilePosition>{usersList[0].company.name}</ProfilePosition>
                </TopBox>
                <TopBox>
                    <TextWrapper>
                        <FaUserFriends />
                        <Text to="/404">Your network</Text>
                        <FaUserPlus />
                    </TextWrapper>
                    <TextWrapper>
                        <FaNewspaper />
                        <Text to="/Workspace">Your Publications</Text>
                        <FaPlus />
                    </TextWrapper>
                </TopBox>
            </ProfileBox>
            <TextWrapperBottom>
                <FaNewspaper />
                <Text to="/404">Publications</Text>
            </TextWrapperBottom>
            <TextWrapperBottom>
                <FaCodeBranch />
                <Text to="/404">Ecosystem</Text>
            </TextWrapperBottom>
            <TextWrapperBottom>
                <FaRegBuilding />
                <Text to="/Entities">Entities</Text>
            </TextWrapperBottom>
            <TextWrapperBottom>
                <FaFileAlt />
                <Text to="/Workspace">Workspace</Text>
            </TextWrapperBottom>
        </LeftMenuContainer>
    )

}

