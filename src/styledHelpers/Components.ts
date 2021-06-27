import styled from 'styled-components';
import { Colors } from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,

}

const boxShadow = (): Styles => {
    return {
        color: `${Colors.black}`
    };
};
const backGroudWhite = (): Styles => {
    return {
        background: `${Colors.white}`
    };
};

export const Wrapper = styled.div`
    ${backGroudWhite()};
    display: flex;
    padding: 5px;
    ${boxShadow()};
    box-shadow: 0px 0px 33px rgba(0,0,0,0.75);
`;

export const Container = styled.div`
display: flex;
justify-content: center;
width: calc(100% - 100px);
max-width: 1440px;
margin: 0 auto;
font-family: "Arial";
z-index: 1;

@media screen and (max-width: 991px){
    width: calc(100% - 30px);
    flex-wrap:wrap;
}
`;

export const MainIcon = styled.svg`
padding: 10px;
`


