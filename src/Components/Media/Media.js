import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const Media = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/sociala-post')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [])
    return (
        <div>
            <h3 className='text-3xl mt-8 text-center'>Media</h3>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 bg-center gap-4'>
                {
                    posts.map(post => <PostCard
                        key={post._id}
                        post={post}
                    ></PostCard>)
                }
            </div>
        </div>
    );
};

export default Media;