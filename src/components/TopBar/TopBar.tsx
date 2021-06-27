import { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { ExpandedMenu } from './ExpandedMenu';
import useDropdown from 'react-dropdown-hook';
import { FaHome, FaRegBell } from "react-icons/fa";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FcStumbleupon } from "react-icons/fc";
import { BiChat } from "react-icons/bi"
import {
    Nav,
    NavbarContainer,
    NavLogo,
    SearchContainer,
    NavNotificationContainer,
    NavDropdown,
    DropdownIcon,
    NavDropdownBtn,
    DropdownArrowIcon,
    SearchInput,
    SearchInputIcon,
    NavNotificationBox,
    NavMenu,
    MobileIcon
} from './TopBar.elements'



export const TopBar: FC = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo >
                        <FcStumbleupon />
                    </NavLogo>
                    <NavMenu click={click} ref={wrapperRef} >
                        <NavDropdown  >
                            <DropdownIcon />
                            <NavDropdownBtn onClick={toggleDropdown}>
                                Home
                            </NavDropdownBtn>
                            {dropdownOpen &&
                                <ExpandedMenu />
                            }
                            <DropdownArrowIcon />
                        </NavDropdown>
                        <SearchContainer>
                            <SearchInput name="search" type="search" placeholder="Search Legalcluster" />
                            <SearchInputIcon />
                        </SearchContainer>
                    </NavMenu>
                    <NavNotificationContainer>
                        <NavNotificationBox to="/">
                            <FaHome />
                        </NavNotificationBox>
                        <NavNotificationBox to="/404">
                            <BiChat />
                        </NavNotificationBox>
                        <NavNotificationBox to="/404">
                            <FaRegBell />
                        </NavNotificationBox>
                    </NavNotificationContainer>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    )
}