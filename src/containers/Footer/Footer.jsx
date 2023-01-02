import React from "react";
import { FooterWrapper } from "./Footer.style";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
const Footer = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <MdOutlinePhotoSizeSelectActual />
          Photos
        </li>
        <li>
          <AiOutlineSearch />
          Search
        </li>
        <li>
          <AiOutlineShareAlt />
          Sharing
        </li>
        <li>
          <BiLibrary />
          Library
        </li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
