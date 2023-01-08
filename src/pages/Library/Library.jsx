import { Button } from "@mantine/core";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import {
  Box,
  ButtonsWrapper,
  Image,
  Photos,
  PhotosWrapper,
  Texts,
  Wrapper,
} from "./styles";
import { TiTickOutline } from "react-icons/ti";
import { BsTrash, BsArchive } from "react-icons/bs";
import { Carousel } from "@mantine/carousel";
import { peopleImages } from "../../mock/peopleArray";
import { Link } from "react-router-dom";
const Library = () => {
  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button>
          <AiOutlineStar />
          Favorites
        </Button>
        <Button>
          <TiTickOutline />
          Utilities
        </Button>
        <Button>
          <BsArchive />
          Archive
        </Button>
        <Button>
          <BsTrash />
          Trash
        </Button>
      </ButtonsWrapper>

      <PhotosWrapper>
        <Texts>
          <h3>People & Pets</h3>
          <Link
            to="/viewPeople"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>View all</h3>
          </Link>
        </Texts>
        <Photos>
          <Carousel
            slideSize="1%"
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
        </Photos>
      </PhotosWrapper>
    </Wrapper>
  );
};

export default Library;
