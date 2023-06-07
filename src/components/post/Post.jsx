import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="image"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        consequatur numquam, assumenda, velit eveniet at non blanditiis eum
        facere dolorem ad? Modi, consequuntur. Est rem dolorum quae cumque
        architecto provident! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Odit consequatur numquam, assumenda, velit eveniet at non
        blanditiis eum facere dolorem ad? Modi, consequuntur. Est rem dolorum
        quae cumque architecto provident! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Odit Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Odit consequatur numquam, assumenda, velit eveniet at
        non blanditiis eum facere dolorem ad? Modi, consequuntur. Est rem
        dolorum quae cumque architecto provident! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Odit consequatur numquam, assumenda, velit
        eveniet at non blanditiis eum facere dolorem ad? Modi, consequuntur. Est
        rem dolorum quae cumque architecto provident!
      </p>
    </div>
  );
}
