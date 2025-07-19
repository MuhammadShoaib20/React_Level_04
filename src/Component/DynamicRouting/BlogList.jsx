import React from 'react'
import {Link} from 'react-router-dom';

const post =  [
{ id: 1 , title: 'React Basic'},
{ id: 2 , title: 'UseEffect Explanined ' },
{ id: 3 , title: 'React Router Guide'},

];

const BlogList = () => {
    
  return (
    <div>
        <h2>Blog Post</h2>
        <ul>
    {post.map((post)=>(
    <li key={post.id}>
        <Link to ={`/post/${post.id}`}>{post.title}</Link>
    </li>
    ))}
        </ul>
      
    </div>
  )
};

export default BlogList
