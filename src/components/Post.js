import React from "react";

function Post({ post }) {

  return (
    <div className="card mt-2 border-primary">
      <div className="card-header bg-white border-primary">
        <h4 className="card-title">{post.title}</h4>
      </div>
      <div className="card-body">
        <p className="card-text">
          {post.content}
        </p>
      </div>
      <div className="card-footer bg-white border-none">
        {post.author}
      </div>
    </div>
  );
}

export default Post;