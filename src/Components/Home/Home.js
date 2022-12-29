import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../Hook/useTitle';
import MakePost from '../MakePost/MakePost';
import PostCard from '../PostCard/PostCard';



const Home = () => {
    useTitle('Home')
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/sociala-top-post')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])
    return (
        <div>

            <MakePost></MakePost>

            <div>
                <h3 className='text-3xl text-center my-3'>Top Reaction Post</h3>
                <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
                    {
                        posts.map(post => <PostCard
                            key={post._id}
                            post={post}
                        ></PostCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;