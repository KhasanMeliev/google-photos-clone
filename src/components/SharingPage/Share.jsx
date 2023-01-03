import React from "react";
import { Buttons, Wrapper } from "./Share.style";
import { MdPhotoAlbum } from "react-icons/md";
import { GiDirectionSigns } from "react-icons/gi";

const Share = () => {
  return (
    <Wrapper>
      <Buttons>
        <button>
          <MdPhotoAlbum />
          Create shared album
        </button>
        <button>
          <GiDirectionSigns />
          Share with partner
        </button>
      </Buttons>
    </Wrapper>
  );
};

export default Share;
