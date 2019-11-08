import React, { useState, useEffect } from "react";
import firebase from "firebase";

import Post from "../components/Post";
import CreatePost from "../components/CreatePost";

function Dashboard() {

  const [posts, setPosts] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      try {
        await firebase.database().ref("/posts/").on("value", snap => {
          setPosts(snap.val());
        });
      } catch (err) {
        console.log(err);
      }
    }

    getPosts();
  }, []);

  return (
    <div className="animated fadeIn fast">
      <div className="container mt-3">
        <CreatePost />
        <div className="mt-3">
          {
            posts && Object.keys(posts).map(post => (
              <Post post={posts[post]} key={post} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Dashboard;