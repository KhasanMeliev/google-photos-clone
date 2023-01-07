import React from "react";
import { Carousel } from "@mantine/carousel";
import { Box, Image, Texts } from "./styles";
import { Link } from "react-router-dom";

import one from "../../../ImagesFile/People/1.jfif";
import two from "../../../ImagesFile/People/2.jfif";
import three from "../../../ImagesFile/People/3.jpg";
import four from "../../../ImagesFile/People/4.jfif";
import five from "../../../ImagesFile/People/5.jfif";
import six from "../../../ImagesFile/People/6.jpg";
import seven from "../../../ImagesFile/People/7.jfif";
import eight from "../../../ImagesFile/People/8.jfif";
import nine from "../../../ImagesFile/People/9.jfif";
import ten from "../../../ImagesFile/People/10.webp";

export const images = [
  { img: one, text: "khasan" },
  { img: two, text: "alex" },
  { img: three, text: "tom" },
  { img: four, text: "jony" },
  { img: five, text: "jack" },
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
        <Link
          to="/viewPeople"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3>View all</h3>
        </Link>
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
