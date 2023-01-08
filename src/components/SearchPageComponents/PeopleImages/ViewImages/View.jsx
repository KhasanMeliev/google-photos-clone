import React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Wrapper, Images, Box, ImagesWrapper } from "./styles";
import { MoreVert } from "@mui/icons-material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";
import { peopleImages } from "../../../../mock/peopleArray";

const View = () => {
  return (
    <Wrapper>
      <ImagesWrapper>
        <FormControl>
          <InputLabel htmlFor="outlined-adornment-amount">People</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <Link to="/search">
                <KeyboardArrowLeftIcon position="start">
                  $
                </KeyboardArrowLeftIcon>
              </Link>
            }
            endAdornment={<MoreVert position="end">$</MoreVert>}
            label="Amount"
          />
        </FormControl>
        <Images>
          {peopleImages.map(({ img, text }, index) => (
            <Box key={index + 1}>
              <img src={img} alt={text} />
              <p>{text}</p>
            </Box>
          ))}
        </Images>
      </ImagesWrapper>
    </Wrapper>
  );
};

export default View;
