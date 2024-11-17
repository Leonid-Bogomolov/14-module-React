import React, { useState } from "react";
import Post from "../Post/Post";
import './menuBurger.css'

const MenuBurger = () => {

    const posts = [
        {id: 1, name: "Burger"},
    ]

    const [mainPosts] = useState(posts)

    return (
      <div className="post-container">
        {mainPosts.map(post =>
            <Post key={post.id} post={post}/>
        )}
      </div>
    );
  }
  
  export default MenuBurger;
