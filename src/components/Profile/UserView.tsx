import { Avatar } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import { ButtonWithLink } from '../../styledHelpers/ButtonWithLink';
import { Example } from "./EditText"



const Wrapper = styled.div`
display: flex;


> div:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    img{
        max-width: 80px;
        border-radius: 50%;
    }
}
@media (max-width: 767px){
    flex-wrap:wrap;
    > div{
        flex-wrap:wrap;
        width: 100%;
    }
    >div:first-child{
        width: 100%;
    }
}
`;
const AccountInfo = styled.div`
	display: flex;
	flex-direction: column;
	span {
		font-size: 0.85em;
		margin-top: 2px;
		margin-left: 20px;
		font-weight: 300;
	}
`;



export const UserView: FC = () => {
    return (
        <Wrapper>
            <div>
                <Avatar alt="Remy Sharp" src="./media/profilePicture.jpg" style={{ width: 80, height: 80 }} />
                <ButtonWithLink link={"/profile"} text={"See profile"} />
            </div>
                <Example />


        </Wrapper>
    )
}