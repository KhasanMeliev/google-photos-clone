import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image, PlaceBox, Texts } from "./styles";

import one from "../../../ImagesFile/Places/1.jpg";
import two from "../../../ImagesFile/Places/2.jfif";
import three from "../../../ImagesFile/Places/3.jpeg";
import four from "../../../ImagesFile/Places/4.jpg";
import five from "../../../ImagesFile/Places/5.jfif";
import six from "../../../ImagesFile/Places/6.jfif";
import seven from "../../../ImagesFile/Places/7.webp";
import eight from "../../../ImagesFile/Places/8.webp";
import nine from "../../../ImagesFile/Places/9.jfif";
import ten from "../../../ImagesFile/Places/10.jpg";

import { Link } from "react-router-dom";

export const placesImages = [
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

const Places = () => {
  return (
    <>
      <Texts>
        <h3>Places</h3>
        <Link
          to="/viewPlaces"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3>View all</h3>
        </Link>
      </Texts>

      <Carousel
        slideSize="1%"
        height={120}
        slideGap="sm"
        controlsOffset="xs"
        withControls={false}
        dragFree
        align="start"
      >
        {placesImages.map(({ img, text }, index) => (
          <Carousel.Slide key={index + 1}>
            <PlaceBox>
              <Image src={img} alt={text} />
              <p>{text}</p>
            </PlaceBox>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default Places;
