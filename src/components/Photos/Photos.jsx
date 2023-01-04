import React from "react";
import {
  Box,
  Images,
  ImagesWrapper,
  PhotosWrapper,
  SliderWrapper,
} from "./Photos.style";
import { Carousel } from "@mantine/carousel";
import { images } from "../SearchPageComponents/PeopleImages/Images";

const sliderTexts = [
  { text: "Featured Wednesday" },
  { text: "Featured Wednesday" },
  { text: "Featured Wednesday" },
  { text: "Featured Wednesday" },
  { text: "Featured Wednesday" },
  { text: "Featured Wednesday" },
  { text: "Featured Wednesday" },
  { text: "Featured Wednesday" },
];
const Photos = () => {
  return (
    <PhotosWrapper>
      <SliderWrapper>
        <Carousel
          slideSize="1%"
          slideGap="sm"
          controlsOffset="xs"
          withControls={false}
          dragFree
          align="start"
        >
          {sliderTexts.map(({ text }, index) => (
            <Carousel.Slide key={index + 1}>
              <Box>
                <p>{text}</p>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </SliderWrapper>

      <ImagesWrapper>
        <h1>Today</h1>
        <Images>
          {images.map(({ img, text }, index) => (
            <img src={img} alt={text} key={index + 1} />
          ))}
        </Images>
        <h1>Yesterday</h1>
        <Images>
          {images.map(({ img, text }, index) => (
            <img src={img} alt={text} key={index + 1} />
          ))}
        </Images>
      </ImagesWrapper>
    </PhotosWrapper>
  );
};

export default Photos;
