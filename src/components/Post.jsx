import React from "react";


export const Post = ({ allPosts }) => {
  function postList(allPosts) {
    let posts = allPosts.filter(post => post.title).map((post, index) => {
      return (
        <li key={"post" + index}>
          <div><a className='text-extrabold' href={post.url}>{post.title}</a><span className='text-gray-500 text-xs'> <a href="">({post.url})</a></span></div >
          <div className="text-gray-500 text-sm">
            {post.points} points | {post.author} | {post.created_at_i} | {post.num_comments} comments
          </div>
        </li >
      )
    })
    return (posts.length ? posts : <div>Empty!</div>)
  }
  return (
    <div className="container bg-gray-800 dark:bg-black ">
      <ul className='bg-gray-100'>
        {postList(allPosts)}
      </ul>
    </div>
  );
};

