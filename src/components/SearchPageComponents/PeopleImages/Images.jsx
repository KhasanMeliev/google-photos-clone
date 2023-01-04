import React from "react";
import { Carousel } from "@mantine/carousel";
import { Box, Image, Texts } from "./styles";
import one from "../../../ImagesFile/1.jfif";
import two from "../../../ImagesFile/2.jfif";
import three from "../../../ImagesFile/3.jpg";
import four from "../../../ImagesFile/4.jfif";
import five from "../../../ImagesFile/5.jfif";
import six from "../../../ImagesFile/6.jpg";
import seven from "../../../ImagesFile/7.jfif";
import eight from "../../../ImagesFile/8.jfif";
import nine from "../../../ImagesFile/9.jfif";
import ten from "../../../ImagesFile/10.webp";

export const images = [
  { img: one, text: "khasan" },
  { img: two, text: "khasan" },
  { img: three, text: "khasan" },
  { img: four, text: "khasan" },
  { img: five, text: "khasan" },
  { img: six, text: "khasan" },
  { img: seven, text: "khasan" },
  { img: eight, text: "khasan" },
  { img: nine, text: "khasan" },
  { img: ten, text: "khasan" },
];

const Images = () => {
  return (
    <>
      <Texts>
        <h3>People & Pets</h3>
        <h3>View all</h3>
      </Texts>
      <Carousel
        slideSize="1%"
        height={75}
        slideGap="sm"
        controlsOffset="xs"
        withControls={false}
        dragFree
        align="start"
      >
        {images.map(({ img, text }, index) => (
          <Carousel.Slide key={index + 1}>
            <Box>
              <Image src={img} alt={text} />
              <p>{text}</p>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default Images;
