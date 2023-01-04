import React from "react";
import { CategoryWrapper } from "./styles";

const Category = ({ lists, title }) => {
  return (
    <CategoryWrapper>
      <h1>{title}</h1>
      <ul>
        {lists.map(({ Icon, title }, index) => (
          <li key={index + 1}>
            <Icon /> {title}
          </li>
        ))}
      </ul>
    </CategoryWrapper>
  );
};

export default Category;
