import { FC, useState } from 'react';
import { YourWorkTile } from './YourWorkTile'
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducers'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 40px;
`;

export const YourWork: FC = () => {

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
            <YourWorkTile
                posts={currentPost}
            />
            <Pagination count={pageLength} onChange={handleChange} />
        </Wrapper>
    )
}

