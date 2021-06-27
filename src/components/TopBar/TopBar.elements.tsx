import styled from 'styled-components';

import { Container, MainIcon } from '../../styledHelpers/Components';
import { FaHome, FaSearch, FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

interface StyledCardProps {
    click?: boolean
}

export const Nav = styled.nav`
background: #fff;
box-shadow: 2px 5px 26px 5px rgba(0,0,0,0.15);
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top:0;
z-index: 20;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
 ${Container}
 flex-wrap: no-wrap;
`;

export const NavLogo = styled.div`
color: #fff;
padding-right: 15px;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 4rem;
display: flex;
align-items: center;
`;



export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    padding-left: 10px;
    color: #000;
}
`;


export const NavMenu = styled.div<StyledCardProps>`
display: flex;
width: 70%;
justify-content: space-between;
@media screen and (max-width: 960px){
    padding: 15px 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content:flex-end;
    width: 100%;
    height: calc(100vh - 110px);
    align-items: center;
    position: absolute;
    top: 80px;
    left:${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #bbb;
}
`;
export const NavDropdown = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
width: 30%;
position: relative;
@media screen and (max-width: 960px){
width: 100%;
max-width: calc(100% - 30px);
justify-content: center;
}
`;

export const DropdownIcon = styled(FaHome)`
font-size: 1.8rem;
`;
export const DropdownArrowIcon = styled(RiArrowDropDownLine)`
font-size: 2rem;
`;

export const NavDropdownBtn = styled.button`
text-align: start;
padding: 0 15px;
font-size: 1rem;
font-weight: bold;
background: transparent;
outline: none;
border: none;
cursor: pointer;
height: 40px;
width: 65%;
`;

export const SearchContainer = styled.div`
display:flex;
align-items: center;
width: 60%;
position: relative;
@media screen and (max-width: 960px){
height: 70px;
width: calc(100% - 30px);
padding:0 15px;
}
`;

export const SearchInput = styled.input`
text-align: center;
height:50%;
width: 100%;
border: 1px solid #7F7F7F42;
border-radius: 5px;
outline: none;
`;

export const SearchInputIcon = styled(FaSearch)`
position: absolute;
right: 30px;
font-size: 1.2rem;
`;

export const NavNotificationContainer = styled.div`
display:flex;
justify-content: flex-end;
width: 30%;
@media screen and (max-width: 960px){
margin-left: auto;
}
`;

export const NavNotificationBox = styled(Link)`
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
    svg{
    font-size: 1.8rem;
    color: #616161;
    padding: 0 5px;
    }
`;

export const NavDropdownBox = styled.div`
display:flex;
flex-direction:column;
position: absolute;
top:100%;
left:0;
width: calc(100% - 30px);
max-height: 400px;
overflow-y: scroll;
padding: 5px 15px;
background: #eee;
border-radius: 5px;
@media screen and (max-width: 960px){
    
}
`;
export const DropdownSearchInput = styled.input`
text-align: center;
padding: 15px;
height:25px;
width: 100%;
border: 1px solid #7F7F7F42;
border-radius: 5px;
outline: none;
@media screen and (max-width: 960px){
    
}
`;

export const DropdownTitle = styled.span`
padding-top: 5px;
font-size: 0.9rem;
color: #888;
`;
export const DropDownWrapper = styled.div`
display: flex;
align-items: center;
padding: 5px 0;
svg{
    font-size: 1.7rem;
    padding-right: 8px;
    color: #444;
}
span:nth-child(2){
    font-size: 0.8rem;
    text-decoration: underline;
    padding-top: 5px;
}
`;

export const DropDownText = styled(Link)`
font-size: 1rem;
color: #003F63;
border: none;
background-color: transparent;
cursor: pointer;
text-decoration:none;
display: flex;
flex-direction: column;
`;