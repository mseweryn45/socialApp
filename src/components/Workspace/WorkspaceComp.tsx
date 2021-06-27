import { FC, useState } from 'react';
import { WorkspaceTile } from './WorkspaceTile'
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { WorkspaceCard } from "./WorkspaceCard"
import { WorkspaceCardMedia } from "./WorkspaceCardMedia"

import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 40px;
>div{
    max-width: 100% !important;
    width: 100%;
    margin-bottom: 50px;
}
`;
const Box = styled.div`
width: 100%;
display:flex;
flex-wrap: wrap;
justify-content: space-around;
>div{
    margin: 15px;
    max-width: 30%;
    min-width:320px;
}
`;

export const WorkspaceComp: FC = () => {

    const { commentsList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }))

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirsPost = indexOfLastPost - postsPerPage;
    const currentPost = commentsList.slice(indexOfFirsPost, indexOfLastPost)
    const pageNumbers = []
    const pageLength = Math.ceil(commentsList.length / postsPerPage)

    //Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        paginate(page);
    };

    for (let i = 1; i <= Math.ceil(commentsList.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Wrapper>
            <WorkspaceCardMedia title={"Corporate holdings"} description={"Workspace purpose and a bit of context. THs much needed description is here to remind people where they are, if they are new or have poor memory"} />
            <Box>
                <WorkspaceCard
                    title={"Explore your entities"}
                    description={"Take a few minutes to look at the most important elements and specifities of your entities"}
                />
                <WorkspaceCard
                    title={"Structure the ownership"}
                    description={"Get a clear view of the ownership by looking at the relaton a clear view of the ownership by looking at the relaton"}
                />
                <WorkspaceCard
                    title={"Define the calendar"}
                    description={"Prepare view of the ownership by  a few minutes to look at the most important elements and specifities of your entities"}
                />
            </Box>
            <WorkspaceTile
                posts={currentPost}
            />
            <Pagination count={pageLength} onChange={handleChange} />
        </Wrapper>
    )
}

