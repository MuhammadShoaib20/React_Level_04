import React from 'react'
import { useParams } from 'react-router-dom';

const posts = [
    {id: 1 , title: "React Basic "},
    {id: 2 , title: "React explained "},
    {id: 3 , title: "React Router Guide "},
];
const BlogPost = () => {
    const {id} = useParams();
    const post = posts.find((p)=> p.id === parseInt(id));

    if (!post) return <h2>Page Not Found</h2>

  return (
    <div>
        <h2>{post.title}</h2>
        <p>Post Id : {post.id}</p>
      
    </div>
  );
};

export default BlogPost;
