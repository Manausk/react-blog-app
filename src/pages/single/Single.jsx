import React from "react";
import "./single.css";
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlepost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      {/* post */}
      <SinglePost />
      <SideBar />
    </div>
  );
}
