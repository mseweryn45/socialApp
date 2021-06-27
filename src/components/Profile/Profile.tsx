import React, { Component } from 'react';
import { FC } from 'react';
import { BiMessageRounded } from 'react-icons/bi';
import { HiUser, HiOutlineDocumentText } from 'react-icons/hi';
import { CgToolbox } from 'react-icons/cg';
import styled from 'styled-components';
import { ButtonWithLink } from '../../styledHelpers/ButtonWithLink';
import { UserView } from './UserView'
import Proposal from './Proposal';
import InternalReviews from "./InternalReviews"
import AmountOfFees from "./AmountOfFees"
import { Link } from 'react-router-dom';
import { EditTextPannel } from './EditTextPannel'

interface IProps { }

const Wrapper = styled.div`
h2{
     padding: 40px 0 20px 0;
     font-size: 1.5rem;
 }
 > a{
     padding-top: 10px;
    display: block;
    text-align: right;
    margin-left: auto;
    text-decoration: none;
    font-size: 1.1rem;
    color: #1B8EF2;
 }
 h3{
    font-size: 1rem;
    color:#6e6e6e;
}
p{
    padding: 10px;
    color: #003F63
}
`;
const TopBar = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
 svg{
    font-size: 1.1rem;
 }
 
`;
const BackgroundInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #9bc2e557;
padding: 10px;
border-radius: 5px;
margin: 5px 0;
div{
    margin-left:auto;
    display: flex;
    align-items: center;
}
img{
    padding-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
`;


export const Profile: FC = () => {
    return (
        <Wrapper>
            <TopBar>
                <BiMessageRounded />
                <ButtonWithLink link={"/404"} text={"Message"} />
                <HiOutlineDocumentText />
                <ButtonWithLink link={"/404"} text={"Create a request"} />
                <CgToolbox />
                <ButtonWithLink link={"/404"} text={"Add to a cluster"} />
            </TopBar>
            <UserView />
            <EditTextPannel />
            <h2>Panel informations</h2>
            <h3>Hourly fee</h3>
            <p>610€/hour (Negociated)</p>
            <h3>Terms & conditions</h3>
            <p>Monthly 10k€ retainer - see with Jeanny Smith</p>
            <BackgroundInfo>Attachment_lorem-ipsum25425.jpg</BackgroundInfo>
            <h2>Services & projects</h2>
            <h3>Corporate M&A and international acquisitions</h3>
            <h2>Internal correspondants</h2>
            <BackgroundInfo>
                <img src="./media/profilePicture.jpg" />
                <span>Ervin Howell</span>
                <div>
                    <BiMessageRounded />
                    <ButtonWithLink link={"/404"} text={"Message"} />
                    <HiUser />
                    <ButtonWithLink link={"/404"} text={"Profile"} />
                </div>
            </BackgroundInfo>
            <BackgroundInfo>
                <img src="./media/profilePicture.jpg" />
                <span>Leanne Graham</span>
                <div>
                    <BiMessageRounded />
                    <ButtonWithLink link={"/404"} text={"Message"} />
                    <HiUser />
                    <ButtonWithLink link={"/404"} text={"Profile"} />
                </div>
            </BackgroundInfo>
            <h2>Proposals</h2>
            <Proposal />
            <Link to="/404" >See more Proposals</Link>
            <h2>Internal reviews</h2>
            <InternalReviews />
            <h2>Amount of fees</h2>
            <AmountOfFees />
        </Wrapper>
    )
}