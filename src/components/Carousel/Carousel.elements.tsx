import styled from 'styled-components';

export const Wrapper = styled.div`
overflow: hidden;
.slick-track {
    display: flex;
}
`;
export const TileContainer = styled.div`
/* display: flex;
width: fit-content;
padding: 10px; */
`;

export const Container = styled.div`
display: flow-root;
margin:0 15px 10px 5px;
height: 220px;
border-radius: 5px;
overflow:hidden;
box-shadow:0px 0px 5px 2px rgba(0,0,0,0.10);
color: #003F63;

`;
export const Image = styled.img`
height: 40%;
background-image: url("./media/document.jpg");
background-position: top;
background-size: cover;
width: 100%;
`;
export const ContentBox = styled.div`
padding:10px;
margin-top: -50px;
`;
export const TitleBox = styled.div`
display: flex;
align-items: center;
svg{
    font-size:4rem;
    color: #616161;
    padding:10px;
    background-color:#fff;
    border-radius: 5px;
    box-shadow:0px 0px 15px 8px rgba(0,0,0,0.10);
}
`;

export const Title = styled.p`
font-size: 1.1rem;
font-weight: 600;
padding: 25px 0 0 12px;
`;

export const DescriptionBox = styled.div`
display:flex;
align-items:center;
padding-top: 15px;
svg{
    color: #616161;
    padding-right: 4px;
    font-size: 1.2rem;
}
`;

export const Description = styled.p`
padding-right: 15px;
font-size: 1rem;
`;

export const LastUpdate = styled.p`
padding-top:25px;
color: #616161;
font-size: 0.8rem;
`;
