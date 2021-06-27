import React from 'react'
import { FC } from 'react';

import {
    ArticleBox,
    ArticleImage,
    ArticleTextBox,
    ArticleText,
    ArticleData,
    ArticleAuthorBox,
    ArticleAuthorImg,
    ArticleAuthorText
} from "./LastPublication.elements"

interface ArticleData {
    title: any;
    author: any;
}

export const LastPublicationArticle: FC<ArticleData> = ({title, author} ) => {
    return (
        <ArticleBox>
            <ArticleImage src="./media/city.jpg" />
            <ArticleTextBox>
                <ArticleText>{title}</ArticleText>
                <ArticleAuthorBox>
                    <ArticleData>7 Jan, 2020</ArticleData>
                    <ArticleAuthorImg src="./media/profilePicture.jpg" />
                    <ArticleAuthorText>{author}</ArticleAuthorText>
                </ArticleAuthorBox>
            </ArticleTextBox>
        </ArticleBox>
    )
}

