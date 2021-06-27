import React from 'react'
import { FC } from 'react';
import { FaUserFriends, FaNewspaper } from "react-icons/fa";
import {
    Container,
    Image,
    ContentBox,
    TitleBox,
    Title,
    DescriptionBox,
    Description,
    LastUpdate
} from "./Carousel.elements"

export const CarouselTile: FC = () => {
    return (
        <Container>
            <Image />
            <ContentBox>
                <TitleBox>
                    <FaNewspaper />
                    <Title>Client contract</Title>
                </TitleBox>
                <DescriptionBox>
                    <FaNewspaper />
                    <Description>Contract</Description>
                    <FaUserFriends />
                    <Description>150 User</Description>
                </DescriptionBox>
                <LastUpdate>Last update 2 days ago</LastUpdate>
            </ContentBox>
        </Container>
    )
}


