import React from "react";
import { Albums, Box, Buttons, Texts, Wrapper } from "./Share.style";
import { MdPhotoAlbum } from "react-icons/md";
import { GiDirectionSigns } from "react-icons/gi";
import { Carousel } from "@mantine/carousel";

const albums = [
  { text: "Maktab" },
  { text: "Create shared album" },
  { text: "Create family album" },
  { text: "Create travel album" },
  { text: "Create event album" },
];

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

      <Albums>
        <Texts>
          <h3>Albums and Memories</h3>
          <h3>View all</h3>
        </Texts>
        <Carousel
          slideSize="1%"
          slideGap="sm"
          controlsOffset="xs"
          withControls={false}
          dragFree
          align="start"
        >
          {albums.map(({ text }, index) => (
            <Carousel.Slide key={index + 1}>
              <Box>+</Box>
              <p>{text}</p>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Albums>
    </Wrapper>
  );
};

export default Share;
