import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';
import SinglePost from '../SinglePost/SinglePost';



const Home = () => {
    useTitle('Home')
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    const imageHostKey = '33d3ac2ab80713f5532e18559077d521';

    const handelPost = event => {
        event.preventDefault();
        const name = user.displayName;
        const text = event.target.text.value;
        let like = 0;
        const image = event.target.image.files[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {

                const imageurl = imgdata.data.url;
                console.log(imageurl)
                const addPost = { text, name, like, imageurl }
                fetch('http://localhost:5000/sociala-post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(addPost)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

            })

    }
    useEffect(() => {
        fetch('http://localhost:5000/sociala-top-post')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])
    return (
        <div>

            <div className='w-96 my-8 m-auto '>
                <form onSubmit={handelPost} className='flex flex-col' >
                    <label className='my-3' htmlFor="text">What is on your mind? </label>
                    <textarea name='text' className="textarea textarea-primary" required id='text' placeholder="what is on your mind?"></textarea>

                    <label className='my-3' htmlFor="image">Choose your photo?</label>
                    <input type="file" name='image' id='image' required className="file-input file-input-bordered file-input-primary w-full" />

                    <input className='btn btn-sm btn-info my-3' type="submit" value="Post" />
                </form>
            </div>

            <div>
                <h3 className='text-3xl text-center my-3'>Top Reaction Post</h3>
                <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
                    {
                        posts.map(post => <SinglePost
                            key={post._id}
                            post={post}
                        ></SinglePost>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;