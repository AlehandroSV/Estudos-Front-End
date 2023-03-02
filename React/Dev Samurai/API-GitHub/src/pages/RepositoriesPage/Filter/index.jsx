import React from "react";

// Import Styled
import { Container, Selector, Cleaner } from "./styles";

const Filter = ({ languages, currentLanguage, onClick }) => {
  const selectors = languages.map(({ name, color, count }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? "selected" : ""}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
    </Container>
  );
};

export default Filter;
