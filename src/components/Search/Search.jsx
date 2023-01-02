import { Carousel } from "@mantine/carousel";
import React from "react";
import { Box, Image, Input, People, SearchWrapper } from "./Search.style";

const Search = () => {
  return (
    <SearchWrapper>
      <Input type="search" placeholder="Search 'Samarkand Region'" />

      <People>
        <p>People & Pets</p>
        <Carousel
          slideSize="1%"
          height={200}
          slideGap="sm"
          controlsOffset="xs"
          withControls={false}
          dragFree
          align="start"
        >
          <Carousel.Slide>
            <Box>
              <Image />
              <p>alex</p>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box>
              <Image />
              <p>alex</p>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box>
              <Image />
              <p>alex</p>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box>
              <Image />
              <p>alex</p>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box>
              <Image />
              <p>alex</p>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box>
              <Image />
              <p>alex</p>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box>
              <Image />
              <p>alex</p>
            </Box>
          </Carousel.Slide>
        </Carousel>
      </People>
    </SearchWrapper>
  );
};

export default Search;
