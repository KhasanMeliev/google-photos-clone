import React from "react";
import { FooterWrapper } from "./Footer.style";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <Link to="/photos">
            <MdOutlinePhotoSizeSelectActual />
            <p>Photos</p>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <AiOutlineSearch />
            Search
          </Link>
        </li>
        <li>
          <Link to="/share">
            <AiOutlineShareAlt />
            Sharing
          </Link>
        </li>
        <li>
          <Link to="/library">
            <BiLibrary />
            Library
          </Link>
        </li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
