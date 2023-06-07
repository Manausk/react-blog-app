import React from "react";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/15202477/pexels-photo-15202477/free-photo-of-portrait-of-girl-in-hat-and-with-sunflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure
          enim iste amet omnis.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
