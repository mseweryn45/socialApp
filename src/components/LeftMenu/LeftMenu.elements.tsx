import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LeftMenuContainer = styled.div`
 padding-top: 30px;
 max-width: 300px;
 font-family: "Arial";
 @media screen and (max-width: 960px){
     width: 100%;
    max-width: 100%;
}
`;

export const ProfileBox = styled.div`
    box-shadow:0px 0px 15px 8px rgba(0,0,0,0.10);
    border-radius: 5px;
    width: 100%;
`;

export const TopBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 25px;
&:first-child{
    border-bottom: 2px solid #eee;
}
`;

export const Image = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-image: url("./media/profilePicture.jpg");
background-size: contain;
background-position: center;
`;

export const ProfileName = styled.span`
 font-size: 1.1rem;
 font-weight: 600;
 color: #1B8EF2;
 padding: 10px 0;
`;

export const ProfilePosition = styled.span`
color: #58595B;
font-size: 0.9rem;
`;

export const TextWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
color: #003F63;
&:first-child{
padding-bottom: 15px;
}
svg{
    font-size: 1.2rem;
    &:last-child{
        border: 2px solid #003F63;
        padding: 5px 8px;
        border-radius: 5px;
        font-size: 1.2rem;
        cursor: pointer;
    }
}
`;

export const Text = styled(Link)`
    font-size: 1rem;
    font-weight: 600;
    padding: 10px 0;
    margin-right: auto;
    border: none;
    color: #003F63;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0 10px;
`;

export const TextWrapperBottom = styled.div`
    display:flex;
    align-items: center;
    padding: 10px 20px;
    color: #003F63;
    &:nth-child(2){
        padding-top:30px;
    }
    svg{
     font-size: 1.8rem;
     color: #888
    }
`;

