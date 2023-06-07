import React from "react";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="image"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Manash</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad
          at laborum! Error libero dignissimos eveniet placeat rem. Ab harum
          quae accusamus veritatis repudiandae ipsam ipsum reiciendis suscipit.
          Officiis, sapiente? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda ad at laborum! Error libero dignissimos eveniet
          placeat rem. Ab harum quae accusamus veritatis repudiandae ipsam ipsum
          reiciendis suscipit. Officiis, sapiente? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda ad at laborum! Error libero
          dignissimos eveniet placeat rem. Ab harum quae accusamus veritatis
          repudiandae ipsam ipsum reiciendis suscipit. Officiis, sapiente? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad at
          laborum! Error libero dignissimos eveniet placeat rem. Ab harum quae
          accusamus veritatis repudiandae ipsam ipsum reiciendis suscipit.
          Officiis, sapiente? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda ad at laborum! Error libero dignissimos eveniet
          placeat rem. Ab harum quae accusamus veritatis repudiandae ipsam ipsum
          reiciendis suscipit. Officiis, sapiente? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas, aut.
        </p>
      </div>
    </div>
  );
}
