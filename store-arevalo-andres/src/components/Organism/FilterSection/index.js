import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import { ArrowRight } from "../../Atoms/ArrowRight/index";
import { ArrowLeft } from "../../Atoms/ArrowLeft/index";

import "./style.css";

export const FilterSection = (props) => {
  const { nextClick, prevClick, currentPage, maxPage } = props;

  return (
    <Container className="filter-container">
      <Header className="flex-filter">
        {`Page ${currentPage} of ${maxPage}`}
        <div>
          {prevClick && (
            <ArrowLeft size="38" marginRight="5px" onClick={prevClick} />
          )}
          {nextClick && <ArrowRight size="38" onClick={nextClick} />}
        </div>
      </Header>
      <Divider />
    </Container>
  );
};
