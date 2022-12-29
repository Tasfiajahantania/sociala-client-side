import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';

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
            <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
                {
                    posts.map(post => <SinglePost
                        key={post._id}
                        post={post}
                    ></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Media;