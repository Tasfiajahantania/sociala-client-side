import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';

const SinglePost = () => {
    const post = useLoaderData()
    // console.log(post)
    return (
        <div className='m-auto'>
            <PostCard
                key={post._id}
                post={post}
            ></PostCard>
        </div>
    );
};

export default SinglePost;