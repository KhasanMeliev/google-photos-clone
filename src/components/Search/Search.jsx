import { Carousel } from "@mantine/carousel";
import React from "react";
import {
  Box,
  Image,
  Input,
  InputWrapper,
  Lists,
  People,
  PlaceBox,
  Places,
  SearchWrapper,
  Texts,
  Wrapper,
} from "./Search.style";
import { AiOutlineStar, AiOutlinePlayCircle } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { CgScreenShot, CgPhotoscan } from "react-icons/cg";
import { TbCameraSelfie, TbRotate360 } from "react-icons/tb";
import { MdSlowMotionVideo } from "react-icons/md";
import { StarIcon } from "@mantine/core";

const Search = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <InputWrapper>
          <Input type="search" placeholder="Search 'Samarkand Region'" />
        </InputWrapper>

        <People>
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
            padding="0"
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

        <Places>
          <Texts>
            <h3>Places</h3>
            <h3>View all</h3>
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
            <Carousel.Slide>
              <PlaceBox>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACfCAMAAADNlwcMAAABCFBMVEUAAAAFAQEJAQEUAQENAQEPAAEcAQEXAAEgAQFLAQMzAAMyAQOIAQMpAQNZAAKMAANQAANsAgM4AwMlAQI3AAN6IwJ4HQPHOwMvAQMsAQJAAQJGAQN/AQKuAQN7AQM7AQKWAQOoLgPLbwKLHgN0AAL+ugj/0AbykQDHUwDITgX/7hj/zULwiyKTNhVgAAGjDwTGLQSyHQPzegX/3jD/xEulZlTHDAPlGwTzIgP+QwT+bAH/YAP/KgT7dAz/sBf/2AD5tGA9FzT+54D/yBfVdTzWLgT9owX/2WH/6lz6vDGjVjztSwPuOQP8jgj/uUqwZz3qmgTifzCVNAKYUBHfk0V/Oj0AABBDEgEu+zUyAAAC2klEQVR4nO2ZeXOTQBiH9+BKIAQaLIGEJJqjWjU0VZeQNFaNrUdab9vv/01c0ssRHccpL1rnff4gwzF5WPix+7IQgiAIgiAI8l9A//YJIAiCIDcMHDkQBEEQBEH+hBtdPWUnz+CbQCXyxzAUaBNjmcm1N1RoE2FSRBsaA2/TZcbojc7aFZTxkkyKWilH5GmMXa2d5x0ETf9+TVEU9qsji4VyrpaTP6ryEvLRuBVUOaUMvk2bfo1CP7tM9ndGzegy2PBlMdAoa1xkDtLEjIuk86YZqIAqqq/7cKoGFbtShb1R63/XjNB1TfkkQ4ePGqYXhi27Cd5JUK6rYTuyqloJ/ZFnRVHHrpbQS3TbltXr2Prvj7w2NbdXv32nbxvgJi107MFwtHV3E7ZKkklQGandG23ff/AQKBZUd8bhuB7HO35cn+yOth89fgJjIqRqCZFMp+lsvpcung73l8+eQ6m0dppOxV46X+xuLV8shy9BLOr6pojZgTeOp7PD4fLV6zdvQUxex5Z9nblKI9I5mh/La3f47j2IiVQi0TbIYLVK5rvHe/6H/dHHGoyJ6NbRJ6KIyXy2WEyI9/nLVwgLXT9J/VkgA+in6STbdnICIOKyO3BjQnZ8QpwoaQMoztHkHam40jIdy4UHJyJmjagh4TppuxpvAoq4mQ23vBHaxKyY+SYVN9Tr/clZoJ244bTyr58FDoss9jey3250UG/ldzeKM5Gm72cX0I0SYeb3FlooWau+XDriANzU3VnJgHtCxOAVROcocZkbRQNoEQniRIRu3cpdPL3w0sUWSaflBLnt7CdhvB5KXfRYrkY53SRe4TW60xvkHlG9PyBm4dWY6lR/3ESDMGBaCZWz0j8lOmfw83CyRleYVsIsnCzR7bM3Xvg5g/9lqg8BAyPyrwJwYyhlisLOvm6cK8Cm+ShTuc65AjuReGVT2KWJlvAtClqAIAiCIIDgOIYgCIIg5BtUwDFt6D+VlwAAAABJRU5ErkJggg==" />
                <p>alex</p>
              </PlaceBox>
            </Carousel.Slide>
            <Carousel.Slide>
              <PlaceBox>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACfCAMAAADNlwcMAAABCFBMVEUAAAAFAQEJAQEUAQENAQEPAAEcAQEXAAEgAQFLAQMzAAMyAQOIAQMpAQNZAAKMAANQAANsAgM4AwMlAQI3AAN6IwJ4HQPHOwMvAQMsAQJAAQJGAQN/AQKuAQN7AQM7AQKWAQOoLgPLbwKLHgN0AAL+ugj/0AbykQDHUwDITgX/7hj/zULwiyKTNhVgAAGjDwTGLQSyHQPzegX/3jD/xEulZlTHDAPlGwTzIgP+QwT+bAH/YAP/KgT7dAz/sBf/2AD5tGA9FzT+54D/yBfVdTzWLgT9owX/2WH/6lz6vDGjVjztSwPuOQP8jgj/uUqwZz3qmgTifzCVNAKYUBHfk0V/Oj0AABBDEgEu+zUyAAAC2klEQVR4nO2ZeXOTQBiH9+BKIAQaLIGEJJqjWjU0VZeQNFaNrUdab9vv/01c0ssRHccpL1rnff4gwzF5WPix+7IQgiAIgiAI8l9A//YJIAiCIDcMHDkQBEEQBEH+hBtdPWUnz+CbQCXyxzAUaBNjmcm1N1RoE2FSRBsaA2/TZcbojc7aFZTxkkyKWilH5GmMXa2d5x0ETf9+TVEU9qsji4VyrpaTP6ryEvLRuBVUOaUMvk2bfo1CP7tM9ndGzegy2PBlMdAoa1xkDtLEjIuk86YZqIAqqq/7cKoGFbtShb1R63/XjNB1TfkkQ4ePGqYXhi27Cd5JUK6rYTuyqloJ/ZFnRVHHrpbQS3TbltXr2Prvj7w2NbdXv32nbxvgJi107MFwtHV3E7ZKkklQGandG23ff/AQKBZUd8bhuB7HO35cn+yOth89fgJjIqRqCZFMp+lsvpcung73l8+eQ6m0dppOxV46X+xuLV8shy9BLOr6pojZgTeOp7PD4fLV6zdvQUxex5Z9nblKI9I5mh/La3f47j2IiVQi0TbIYLVK5rvHe/6H/dHHGoyJ6NbRJ6KIyXy2WEyI9/nLVwgLXT9J/VkgA+in6STbdnICIOKyO3BjQnZ8QpwoaQMoztHkHam40jIdy4UHJyJmjagh4TppuxpvAoq4mQ23vBHaxKyY+SYVN9Tr/clZoJ244bTyr58FDoss9jey3250UG/ldzeKM5Gm72cX0I0SYeb3FlooWau+XDriANzU3VnJgHtCxOAVROcocZkbRQNoEQniRIRu3cpdPL3w0sUWSaflBLnt7CdhvB5KXfRYrkY53SRe4TW60xvkHlG9PyBm4dWY6lR/3ESDMGBaCZWz0j8lOmfw83CyRleYVsIsnCzR7bM3Xvg5g/9lqg8BAyPyrwJwYyhlisLOvm6cK8Cm+ShTuc65AjuReGVT2KWJlvAtClqAIAiCIIDgOIYgCIIg5BtUwDFt6D+VlwAAAABJRU5ErkJggg==" />
                <p>alex</p>
              </PlaceBox>
            </Carousel.Slide>
            <Carousel.Slide>
              <PlaceBox>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACfCAMAAADNlwcMAAABCFBMVEUAAAAFAQEJAQEUAQENAQEPAAEcAQEXAAEgAQFLAQMzAAMyAQOIAQMpAQNZAAKMAANQAANsAgM4AwMlAQI3AAN6IwJ4HQPHOwMvAQMsAQJAAQJGAQN/AQKuAQN7AQM7AQKWAQOoLgPLbwKLHgN0AAL+ugj/0AbykQDHUwDITgX/7hj/zULwiyKTNhVgAAGjDwTGLQSyHQPzegX/3jD/xEulZlTHDAPlGwTzIgP+QwT+bAH/YAP/KgT7dAz/sBf/2AD5tGA9FzT+54D/yBfVdTzWLgT9owX/2WH/6lz6vDGjVjztSwPuOQP8jgj/uUqwZz3qmgTifzCVNAKYUBHfk0V/Oj0AABBDEgEu+zUyAAAC2klEQVR4nO2ZeXOTQBiH9+BKIAQaLIGEJJqjWjU0VZeQNFaNrUdab9vv/01c0ssRHccpL1rnff4gwzF5WPix+7IQgiAIgiAI8l9A//YJIAiCIDcMHDkQBEEQBEH+hBtdPWUnz+CbQCXyxzAUaBNjmcm1N1RoE2FSRBsaA2/TZcbojc7aFZTxkkyKWilH5GmMXa2d5x0ETf9+TVEU9qsji4VyrpaTP6ryEvLRuBVUOaUMvk2bfo1CP7tM9ndGzegy2PBlMdAoa1xkDtLEjIuk86YZqIAqqq/7cKoGFbtShb1R63/XjNB1TfkkQ4ePGqYXhi27Cd5JUK6rYTuyqloJ/ZFnRVHHrpbQS3TbltXr2Prvj7w2NbdXv32nbxvgJi107MFwtHV3E7ZKkklQGandG23ff/AQKBZUd8bhuB7HO35cn+yOth89fgJjIqRqCZFMp+lsvpcung73l8+eQ6m0dppOxV46X+xuLV8shy9BLOr6pojZgTeOp7PD4fLV6zdvQUxex5Z9nblKI9I5mh/La3f47j2IiVQi0TbIYLVK5rvHe/6H/dHHGoyJ6NbRJ6KIyXy2WEyI9/nLVwgLXT9J/VkgA+in6STbdnICIOKyO3BjQnZ8QpwoaQMoztHkHam40jIdy4UHJyJmjagh4TppuxpvAoq4mQ23vBHaxKyY+SYVN9Tr/clZoJ244bTyr58FDoss9jey3250UG/ldzeKM5Gm72cX0I0SYeb3FlooWau+XDriANzU3VnJgHtCxOAVROcocZkbRQNoEQniRIRu3cpdPL3w0sUWSaflBLnt7CdhvB5KXfRYrkY53SRe4TW60xvkHlG9PyBm4dWY6lR/3ESDMGBaCZWz0j8lOmfw83CyRleYVsIsnCzR7bM3Xvg5g/9lqg8BAyPyrwJwYyhlisLOvm6cK8Cm+ShTuc65AjuReGVT2KWJlvAtClqAIAiCIIDgOIYgCIIg5BtUwDFt6D+VlwAAAABJRU5ErkJggg==" />
                <p>alex</p>
              </PlaceBox>
            </Carousel.Slide>
            <Carousel.Slide>
              <PlaceBox>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACfCAMAAADNlwcMAAABCFBMVEUAAAAFAQEJAQEUAQENAQEPAAEcAQEXAAEgAQFLAQMzAAMyAQOIAQMpAQNZAAKMAANQAANsAgM4AwMlAQI3AAN6IwJ4HQPHOwMvAQMsAQJAAQJGAQN/AQKuAQN7AQM7AQKWAQOoLgPLbwKLHgN0AAL+ugj/0AbykQDHUwDITgX/7hj/zULwiyKTNhVgAAGjDwTGLQSyHQPzegX/3jD/xEulZlTHDAPlGwTzIgP+QwT+bAH/YAP/KgT7dAz/sBf/2AD5tGA9FzT+54D/yBfVdTzWLgT9owX/2WH/6lz6vDGjVjztSwPuOQP8jgj/uUqwZz3qmgTifzCVNAKYUBHfk0V/Oj0AABBDEgEu+zUyAAAC2klEQVR4nO2ZeXOTQBiH9+BKIAQaLIGEJJqjWjU0VZeQNFaNrUdab9vv/01c0ssRHccpL1rnff4gwzF5WPix+7IQgiAIgiAI8l9A//YJIAiCIDcMHDkQBEEQBEH+hBtdPWUnz+CbQCXyxzAUaBNjmcm1N1RoE2FSRBsaA2/TZcbojc7aFZTxkkyKWilH5GmMXa2d5x0ETf9+TVEU9qsji4VyrpaTP6ryEvLRuBVUOaUMvk2bfo1CP7tM9ndGzegy2PBlMdAoa1xkDtLEjIuk86YZqIAqqq/7cKoGFbtShb1R63/XjNB1TfkkQ4ePGqYXhi27Cd5JUK6rYTuyqloJ/ZFnRVHHrpbQS3TbltXr2Prvj7w2NbdXv32nbxvgJi107MFwtHV3E7ZKkklQGandG23ff/AQKBZUd8bhuB7HO35cn+yOth89fgJjIqRqCZFMp+lsvpcung73l8+eQ6m0dppOxV46X+xuLV8shy9BLOr6pojZgTeOp7PD4fLV6zdvQUxex5Z9nblKI9I5mh/La3f47j2IiVQi0TbIYLVK5rvHe/6H/dHHGoyJ6NbRJ6KIyXy2WEyI9/nLVwgLXT9J/VkgA+in6STbdnICIOKyO3BjQnZ8QpwoaQMoztHkHam40jIdy4UHJyJmjagh4TppuxpvAoq4mQ23vBHaxKyY+SYVN9Tr/clZoJ244bTyr58FDoss9jey3250UG/ldzeKM5Gm72cX0I0SYeb3FlooWau+XDriANzU3VnJgHtCxOAVROcocZkbRQNoEQniRIRu3cpdPL3w0sUWSaflBLnt7CdhvB5KXfRYrkY53SRe4TW60xvkHlG9PyBm4dWY6lR/3ESDMGBaCZWz0j8lOmfw83CyRleYVsIsnCzR7bM3Xvg5g/9lqg8BAyPyrwJwYyhlisLOvm6cK8Cm+ShTuc65AjuReGVT2KWJlvAtClqAIAiCIIDgOIYgCIIg5BtUwDFt6D+VlwAAAABJRU5ErkJggg==" />
                <p>alex</p>
              </PlaceBox>
            </Carousel.Slide>
            <Carousel.Slide>
              <PlaceBox>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACfCAMAAADNlwcMAAABCFBMVEUAAAAFAQEJAQEUAQENAQEPAAEcAQEXAAEgAQFLAQMzAAMyAQOIAQMpAQNZAAKMAANQAANsAgM4AwMlAQI3AAN6IwJ4HQPHOwMvAQMsAQJAAQJGAQN/AQKuAQN7AQM7AQKWAQOoLgPLbwKLHgN0AAL+ugj/0AbykQDHUwDITgX/7hj/zULwiyKTNhVgAAGjDwTGLQSyHQPzegX/3jD/xEulZlTHDAPlGwTzIgP+QwT+bAH/YAP/KgT7dAz/sBf/2AD5tGA9FzT+54D/yBfVdTzWLgT9owX/2WH/6lz6vDGjVjztSwPuOQP8jgj/uUqwZz3qmgTifzCVNAKYUBHfk0V/Oj0AABBDEgEu+zUyAAAC2klEQVR4nO2ZeXOTQBiH9+BKIAQaLIGEJJqjWjU0VZeQNFaNrUdab9vv/01c0ssRHccpL1rnff4gwzF5WPix+7IQgiAIgiAI8l9A//YJIAiCIDcMHDkQBEEQBEH+hBtdPWUnz+CbQCXyxzAUaBNjmcm1N1RoE2FSRBsaA2/TZcbojc7aFZTxkkyKWilH5GmMXa2d5x0ETf9+TVEU9qsji4VyrpaTP6ryEvLRuBVUOaUMvk2bfo1CP7tM9ndGzegy2PBlMdAoa1xkDtLEjIuk86YZqIAqqq/7cKoGFbtShb1R63/XjNB1TfkkQ4ePGqYXhi27Cd5JUK6rYTuyqloJ/ZFnRVHHrpbQS3TbltXr2Prvj7w2NbdXv32nbxvgJi107MFwtHV3E7ZKkklQGandG23ff/AQKBZUd8bhuB7HO35cn+yOth89fgJjIqRqCZFMp+lsvpcung73l8+eQ6m0dppOxV46X+xuLV8shy9BLOr6pojZgTeOp7PD4fLV6zdvQUxex5Z9nblKI9I5mh/La3f47j2IiVQi0TbIYLVK5rvHe/6H/dHHGoyJ6NbRJ6KIyXy2WEyI9/nLVwgLXT9J/VkgA+in6STbdnICIOKyO3BjQnZ8QpwoaQMoztHkHam40jIdy4UHJyJmjagh4TppuxpvAoq4mQ23vBHaxKyY+SYVN9Tr/clZoJ244bTyr58FDoss9jey3250UG/ldzeKM5Gm72cX0I0SYeb3FlooWau+XDriANzU3VnJgHtCxOAVROcocZkbRQNoEQniRIRu3cpdPL3w0sUWSaflBLnt7CdhvB5KXfRYrkY53SRe4TW60xvkHlG9PyBm4dWY6lR/3ESDMGBaCZWz0j8lOmfw83CyRleYVsIsnCzR7bM3Xvg5g/9lqg8BAyPyrwJwYyhlisLOvm6cK8Cm+ShTuc65AjuReGVT2KWJlvAtClqAIAiCIIDgOIYgCIIg5BtUwDFt6D+VlwAAAABJRU5ErkJggg==" />
                <p>alex</p>
              </PlaceBox>
            </Carousel.Slide>
            <Carousel.Slide>
              <PlaceBox>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACfCAMAAADNlwcMAAABCFBMVEUAAAAFAQEJAQEUAQENAQEPAAEcAQEXAAEgAQFLAQMzAAMyAQOIAQMpAQNZAAKMAANQAANsAgM4AwMlAQI3AAN6IwJ4HQPHOwMvAQMsAQJAAQJGAQN/AQKuAQN7AQM7AQKWAQOoLgPLbwKLHgN0AAL+ugj/0AbykQDHUwDITgX/7hj/zULwiyKTNhVgAAGjDwTGLQSyHQPzegX/3jD/xEulZlTHDAPlGwTzIgP+QwT+bAH/YAP/KgT7dAz/sBf/2AD5tGA9FzT+54D/yBfVdTzWLgT9owX/2WH/6lz6vDGjVjztSwPuOQP8jgj/uUqwZz3qmgTifzCVNAKYUBHfk0V/Oj0AABBDEgEu+zUyAAAC2klEQVR4nO2ZeXOTQBiH9+BKIAQaLIGEJJqjWjU0VZeQNFaNrUdab9vv/01c0ssRHccpL1rnff4gwzF5WPix+7IQgiAIgiAI8l9A//YJIAiCIDcMHDkQBEEQBEH+hBtdPWUnz+CbQCXyxzAUaBNjmcm1N1RoE2FSRBsaA2/TZcbojc7aFZTxkkyKWilH5GmMXa2d5x0ETf9+TVEU9qsji4VyrpaTP6ryEvLRuBVUOaUMvk2bfo1CP7tM9ndGzegy2PBlMdAoa1xkDtLEjIuk86YZqIAqqq/7cKoGFbtShb1R63/XjNB1TfkkQ4ePGqYXhi27Cd5JUK6rYTuyqloJ/ZFnRVHHrpbQS3TbltXr2Prvj7w2NbdXv32nbxvgJi107MFwtHV3E7ZKkklQGandG23ff/AQKBZUd8bhuB7HO35cn+yOth89fgJjIqRqCZFMp+lsvpcung73l8+eQ6m0dppOxV46X+xuLV8shy9BLOr6pojZgTeOp7PD4fLV6zdvQUxex5Z9nblKI9I5mh/La3f47j2IiVQi0TbIYLVK5rvHe/6H/dHHGoyJ6NbRJ6KIyXy2WEyI9/nLVwgLXT9J/VkgA+in6STbdnICIOKyO3BjQnZ8QpwoaQMoztHkHam40jIdy4UHJyJmjagh4TppuxpvAoq4mQ23vBHaxKyY+SYVN9Tr/clZoJ244bTyr58FDoss9jey3250UG/ldzeKM5Gm72cX0I0SYeb3FlooWau+XDriANzU3VnJgHtCxOAVROcocZkbRQNoEQniRIRu3cpdPL3w0sUWSaflBLnt7CdhvB5KXfRYrkY53SRe4TW60xvkHlG9PyBm4dWY6lR/3ESDMGBaCZWz0j8lOmfw83CyRleYVsIsnCzR7bM3Xvg5g/9lqg8BAyPyrwJwYyhlisLOvm6cK8Cm+ShTuc65AjuReGVT2KWJlvAtClqAIAiCIIDgOIYgCIIg5BtUwDFt6D+VlwAAAABJRU5ErkJggg==" />
                <p>alex</p>
              </PlaceBox>
            </Carousel.Slide>
            <Carousel.Slide>
              <PlaceBox>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAACfCAMAAADNlwcMAAABCFBMVEUAAAAFAQEJAQEUAQENAQEPAAEcAQEXAAEgAQFLAQMzAAMyAQOIAQMpAQNZAAKMAANQAANsAgM4AwMlAQI3AAN6IwJ4HQPHOwMvAQMsAQJAAQJGAQN/AQKuAQN7AQM7AQKWAQOoLgPLbwKLHgN0AAL+ugj/0AbykQDHUwDITgX/7hj/zULwiyKTNhVgAAGjDwTGLQSyHQPzegX/3jD/xEulZlTHDAPlGwTzIgP+QwT+bAH/YAP/KgT7dAz/sBf/2AD5tGA9FzT+54D/yBfVdTzWLgT9owX/2WH/6lz6vDGjVjztSwPuOQP8jgj/uUqwZz3qmgTifzCVNAKYUBHfk0V/Oj0AABBDEgEu+zUyAAAC2klEQVR4nO2ZeXOTQBiH9+BKIAQaLIGEJJqjWjU0VZeQNFaNrUdab9vv/01c0ssRHccpL1rnff4gwzF5WPix+7IQgiAIgiAI8l9A//YJIAiCIDcMHDkQBEEQBEH+hBtdPWUnz+CbQCXyxzAUaBNjmcm1N1RoE2FSRBsaA2/TZcbojc7aFZTxkkyKWilH5GmMXa2d5x0ETf9+TVEU9qsji4VyrpaTP6ryEvLRuBVUOaUMvk2bfo1CP7tM9ndGzegy2PBlMdAoa1xkDtLEjIuk86YZqIAqqq/7cKoGFbtShb1R63/XjNB1TfkkQ4ePGqYXhi27Cd5JUK6rYTuyqloJ/ZFnRVHHrpbQS3TbltXr2Prvj7w2NbdXv32nbxvgJi107MFwtHV3E7ZKkklQGandG23ff/AQKBZUd8bhuB7HO35cn+yOth89fgJjIqRqCZFMp+lsvpcung73l8+eQ6m0dppOxV46X+xuLV8shy9BLOr6pojZgTeOp7PD4fLV6zdvQUxex5Z9nblKI9I5mh/La3f47j2IiVQi0TbIYLVK5rvHe/6H/dHHGoyJ6NbRJ6KIyXy2WEyI9/nLVwgLXT9J/VkgA+in6STbdnICIOKyO3BjQnZ8QpwoaQMoztHkHam40jIdy4UHJyJmjagh4TppuxpvAoq4mQ23vBHaxKyY+SYVN9Tr/clZoJ244bTyr58FDoss9jey3250UG/ldzeKM5Gm72cX0I0SYeb3FlooWau+XDriANzU3VnJgHtCxOAVROcocZkbRQNoEQniRIRu3cpdPL3w0sUWSaflBLnt7CdhvB5KXfRYrkY53SRe4TW60xvkHlG9PyBm4dWY6lR/3ESDMGBaCZWz0j8lOmfw83CyRleYVsIsnCzR7bM3Xvg5g/9lqg8BAyPyrwJwYyhlisLOvm6cK8Cm+ShTuc65AjuReGVT2KWJlvAtClqAIAiCIIDgOIYgCIIg5BtUwDFt6D+VlwAAAABJRU5ErkJggg==" />
                <p>alex</p>
              </PlaceBox>
            </Carousel.Slide>
          </Carousel>
        </Places>

        <Lists>
          <ul>
            Your Activity
            <li>
              <AiOutlineStar />
              Favorites
            </li>
            <li>
              <IoMdTime /> Recently Added
            </li>
            Categories
            <li>
              <CgScreenShot /> Screenshots
            </li>
            <li>
              <TbCameraSelfie /> Selfies
            </li>
            <li>
              <MdSlowMotionVideo /> Videos
            </li>
            <li>
              <TbRotate360 /> 360 Photos & Videos
            </li>
            <li>
              <CgPhotoscan /> PhotoScan
            </li>
            <li>
              <AiOutlinePlayCircle /> Motion Photos
            </li>
          </ul>
        </Lists>
      </SearchWrapper>
    </Wrapper>
  );
};

export default Search;
