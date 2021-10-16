import React from "react";


export const Post = ({ allPosts, search }) => {
  function postList(allPosts) {
    let posts = allPosts.filter(post => post.title).map((post, index) => {
      return (
        <div className='px-2 py-4 transform text-lg hover:-translate-y-1 hover:scale-610' key={"post" + index}>
          <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline opacity-50 hover:opacity-75" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg></span>
          <a className='transition pl-2 duration-500 ease-in-out bg-red-30' href={post.url}>{
            // [post.title.slice(0, post.title.match(post._highlightResult.title.matchedWords).index),
            // <span className='bg-red-300'>{post._highlightResult.title.matchedWords}</span>,
            // post.title.slice(post.title.match(post._highlightResult.title.matchedWords).index + post._highlightResult.title.matchedWords.length)]
            post.title
          }
          </a>

          <a href="/" className="md:text-gray-500 pl-2">({post.url})</a>


          <div className="text-xs text-red-300">
            {post.points} points | {post.author} | {post.num_comments} comment |
          </div>
        </div >
      )
    })
    return (posts.length ? posts : <div>Empty!</div>)
  }
  return (
    <div className="md:container shadow-2xl my-4 mx-auto rounded-md w-3/4">
      <div className='px-5 py-5'>
        {postList(allPosts)}
      </div>
    </div>
  );
};

