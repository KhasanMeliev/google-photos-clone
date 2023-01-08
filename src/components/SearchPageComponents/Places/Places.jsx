import React from "react";
import { Carousel } from "@mantine/carousel";
import { Image, PlaceBox, Texts } from "./styles";
import { Link } from "react-router-dom";
import { placesImages } from "../../../mock/placesArray";
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
