import React from "react";
import {
  Input,
  InputWrapper,
  Lists,
  People,
  PlacesWrapper,
  SearchWrapper,
  Wrapper,
} from "./Search.style";

import { AiOutlineStar, AiOutlinePlayCircle } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { CgScreenShot, CgPhotoscan } from "react-icons/cg";
import { TbCameraSelfie, TbRotate360 } from "react-icons/tb";
import { MdSlowMotionVideo } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Category from "../../components/SearchPageComponents/Category/Category";
import Images, {
  images,
} from "../../components/SearchPageComponents/PeopleImages/Images";
import Places, {
  placesImages,
} from "../../components/SearchPageComponents/Places/Places";

const categories = [
  { Icon: CgScreenShot, title: "Screenshots" },
  { Icon: TbRotate360, title: "360 photos & videos" },
  { Icon: TbCameraSelfie, title: "Selfies" },
  { Icon: MdSlowMotionVideo, title: "Videos" },
  { Icon: CgPhotoscan, title: "PhotoScan" },
  { Icon: AiOutlinePlayCircle, title: "Motion Photos" },
];

const yourActivity = [
  { Icon: AiOutlineStar, title: "Favorites" },
  { Icon: IoMdTime, title: "Recently added" },
];

const creations = [{ Icon: BsStars, title: "Saved Creations" }];

const Search = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <InputWrapper>
          <Input type="search" placeholder="Search 'Samarkand Region'" />
        </InputWrapper>

        <People>
          <Images title="People & Pets" images={placesImages} />
        </People>

        <PlacesWrapper>
          <Places title="Places" images={images} />
        </PlacesWrapper>

        <Lists>
          <Category title="Your Activity" lists={yourActivity} />
          <Category title="Categories" lists={categories} />
          <Category title="Creations" lists={creations} />
          <button>
            <h3>Help improve Google Photos</h3>
            <p>Take a minute to review photos now</p>
          </button>
        </Lists>
      </SearchWrapper>
    </Wrapper>
  );
};

export default Search;
