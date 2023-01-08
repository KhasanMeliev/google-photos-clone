import React from "react";
import { Carousel } from "@mantine/carousel";
import { Box, Image, Texts } from "./styles";
import { Link } from "react-router-dom";
import { peopleImages } from "../../../mock/peopleArray";

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
        {peopleImages.map(({ img, text }, index) => (
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
