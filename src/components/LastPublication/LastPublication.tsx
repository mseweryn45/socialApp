import React, { useEffect } from 'react'
import { FC } from 'react';
import {
    Wrapper,
    LeftContainer,
    RightContainer,
    Image,
    Text,
    SeeMoreBtn,
    ImageBox,
    ImageDescription,
    ArticleAuthorBox,
    ArticleData,
    ArticleAuthorImg,
    ArticleAuthorText
} from "./LastPublication.elements"
import { LastPublicationArticle } from "./LastPublicationArticle"

import { useSelector } from 'react-redux';
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'

export const LastPublication: FC = () => {
    const { usersList, commentsList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))
    
    if (commentsList.length == 0 || usersList.length == 0) return null
    return (
        <Wrapper>
            <LeftContainer>
                <Image src="./media/city.jpg" />
                <ImageBox>
                    <ImageDescription>{commentsList[1].body}</ImageDescription>
                    <ArticleAuthorBox>
                        <ArticleData>7 Jan, 2020</ArticleData>
                        <ArticleAuthorImg src="./media/profilePicture.jpg" />
                        <ArticleAuthorText>{usersList[1].name}</ArticleAuthorText>
                    </ArticleAuthorBox>
                </ImageBox>
            </LeftContainer>
            <RightContainer>
                <Text>Latest publications</Text>
                <LastPublicationArticle
                    title={commentsList[1].body}
                    author={usersList[0].name}
                />
                <LastPublicationArticle
                    title={commentsList[2].body}
                    author={usersList[2].name}
                />
                <LastPublicationArticle
                    title={commentsList[3].body}
                    author={usersList[3].name}
                />
                <SeeMoreBtn>See more publications</SeeMoreBtn>
            </RightContainer>
        </Wrapper>
    )
}

