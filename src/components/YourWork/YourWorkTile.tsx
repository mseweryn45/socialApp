import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {
    FaRegBuilding
} from 'react-icons/fa';

interface PostsData {
    posts: any;
}
const Wrapper = styled.div`
padding-top: 40px;
width: 100%;

.topbar-box{
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;

    h2{
        margin-right: auto;
        font-size: 1.6rem;
    }
    input{
        margin-right: 30px;
        align-self: flex-end;
    }
}
`;
const Container = styled.div`
    padding: 10px;
    box-shadow:0px 0px 5px 2px rgba(0,0,0,0.10);
    margin-bottom: 15px;

    h3{
        font-size: 1.5rem;
        color: #003F63;
    }
    p{
        color: #616161;
        padding: 8px 0;
    }
    .box{
        display: flex;
        align-items: center;
        p{
            font-size: 1rem;
            padding: 0 15px 0 6px;
        }
        svg{
            color: #616161
        }
    }
`;
const Followed = styled.button`
border: none;
background-color: transparent;
color: #003F63;
font-weight: 600;
position: relative;
padding-right: 20px;
cursor: pointer;
&::after{
content: "\\2039";
font-size: 1.4rem;
position: absolute;
top: 0;
right: 0;
transform: rotate(270deg);
}
`;




export const YourWorkTile: FC<PostsData> = ({ posts }) => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }


    return (
        <Wrapper>
            <div className="topbar-box">
                <h2>Your work</h2>
                <input name="search" type="search" placeholder="Filter..." value={inputText} onChange={inputHandler} />
                <Followed>Followed</Followed>
            </div>
            {posts.map((post: any) => (
                <div key={post.id} className='list-group-item'>
                    {post.name.toLowerCase().includes(inputText.toLowerCase()) &&
                        <Container>
                            <h3>{post.name}</h3>
                            <p>{post.body}</p>
                            <div className="box">
                                <FaRegBuilding />
                                <p>Subsid. corp.</p>
                                <FaRegBuilding />
                                <p>Client contract</p>
                                <p>Updated 3 days ago by John Doe</p>
                            </div>
                        </Container>
                    }
                </div>
            ))}
        </Wrapper>
    )
}

