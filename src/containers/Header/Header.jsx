import React from "react";
import { Box, HeaderWrapper, Profile, Title } from "./Header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        <p>
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
          <span>Photos</span>
        </p>
      </Title>
      <Profile>
        <Box></Box>
      </Profile>
    </HeaderWrapper>
  );
};

export default Header;
