import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {
    AiOutlineAppstore,
    AiOutlineBars,
    AiOutlineFilter,
    AiOutlineShareAlt
} from 'react-icons/ai';
import {
    BsThreeDots
} from 'react-icons/bs';
import {
    CgArrowsExchangeAltV
} from 'react-icons/cg';


interface PostsData {
    posts: any;
}
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    width: 100%;

    .topbar-box{
        display: flex;
        align-items: center;
        flex-direction: row;
        padding-bottom: 10px;
        width: 100%;

        h2{
            margin-right: auto;
            font-size: 1.6rem;
        }
        input{
            margin-right: 30px;
            align-self: flex-end;
        }
        div{
            cursor: pointer;
            padding-right: 15px;
            border-left: 1px solid #61616166;
        }
    }
    .list-group-item{
        max-width: 25%;
    }
    .full-width{
        width:100%;
        max-width:100%;
}
button,
select,
input{
    cursor: pointer;
    display: flex;
    border: 1px solid #000000;
    border-radius:5px;
    padding: 8px;
    background-color: transparent;
}
input{
    margin-left:auto;
}
svg{
    cursor: pointer;
    padding: 0 10px
}
`;
const Container = styled.div`
    padding: 10px;
    box-shadow:0px 0px 5px 2px rgba(0,0,0,0.10);
    margin: 0 10px 15px 0;
    display: flex;    
    align-items: center;
    min-height: 100px;
    border-radius: 5px;

    div{
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    h3{
        font-size: 1.1rem;
        color: #003F63;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        text-transform: capitalize;
    }
    p{
        font-size: 0.8rem;
        color: #616161;
        padding: 8px 0;
    }
    img{
        width: 80px;
        height: 80px;
    }
`;





export const EntitiesTile: FC<PostsData> = ({ posts }) => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <Wrapper>
            <div className="topbar-box">
                <select name="cars" id="cars">
                    <option value="volvo">Select</option>
                </select>
                <BsThreeDots />
                <div>
                <CgArrowsExchangeAltV/>
                Sort
                </div>
                
                <div>
                <AiOutlineFilter/>
                Filters
                </div>
                <div>
                <AiOutlineShareAlt/>
                Share
                </div>
                
                <input name="search" type="search" placeholder="Search..." value={inputText} onChange={inputHandler} />
                <button onClick={handleClick} >
                    {click ? <AiOutlineBars /> : <AiOutlineAppstore />}
                </button>
            </div>
            {posts.map((post: any) => (
                <div key={post.id}
                    className={`list-group-item ${click ? "full-width" : ""}`}>
                    {post.name.toLowerCase().includes(inputText.toLowerCase()) &&
                        <Container>
                            <img src="./media/document.jpg" />
                            <div>
                                <h3>{post.name}</h3>
                                <p>Caracas 1050, Distrito Capital, Venezuela</p>
                            </div>
                        </Container>
                    }
                </div>
            ))}
        </Wrapper>
    )
}

