//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import DummyData from "../../dummy-data.js"
// import data 

const PostsPage = () => {
  // set up state for your data
  const [dummyData, setDummyData] = useState(DummyData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}

      {

        dummyData.map(post1 => {
          return <Post data={post1} />
        })

      }

    </div>
  );
};

export default PostsPage;
