import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
width: 100%;
height: fit-content;
margin-bottom: 30px;
box-shadow: 2px 5px 26px 5px rgba(0,0,0,0.15);
@media screen and (max-width: 1200px){
     flex-wrap: wrap;
     justify-content: center;
}
@media screen and (max-width: 960px){
     width: 100%;
}
`;

export const LeftContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-end;
width: 40%;
max-width: 350px;
position:relative;
@media screen and (max-width: 1200px){
     flex-wrap: wrap;
     justify-content: center;
}
@media screen and (max-width: 960px){
     width:320px;
     height:320px;
}
`;
export const ImageBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
position: absolute;
height: 100%;
bottom: 0;
padding: 20px;
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
color: #003F63;
`;
export const ImageDescription = styled.a`
font-weight: 600;
font-size: 1rem;
`;

export const RightContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px;
width: calc(100% - 350px);
@media screen and (max-width: 1200px){
     width: 100%;
}
`;

export const Image = styled.img`
width:100%;
height:100%;
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
`;



export const Text = styled.h1`
color: #003F63;
font-size: 1.3rem;
font-weight: 600;
padding-bottom: 10px;
`
export const ArticleBox = styled.div`
display: flex;
padding: 5px 0;
`
export const ArticleImage = styled.img`
max-width: 85px;
max-height: 85px;
`
export const ArticleTextBox = styled.div`
color: #003F63;
padding: 6px;
`
export const ArticleText = styled.a`
font-size: 1rem;
font-weight: 600;
cursor: pointer;
`
export const ArticleAuthorBox = styled.div`
display: flex;
align-items: center;
overflow-y: auto;
padding-top: 8px;
`
export const ArticleData = styled.span`
font-size: 0.9rem;
color: #616161;
`
export const ArticleAuthorImg = styled.img`
border-radius: 50%;
max-width:25px;
padding: 0 6px;
`

export const ArticleAuthorText = styled.span`
font-size: 1rem;
`
export const SeeMoreBtn = styled.button`
display:flex;
padding: 10px 0 0 0;
cursor: pointer;
font-size: 1rem;
background: none;
border: none;
color: #003F63;
`
