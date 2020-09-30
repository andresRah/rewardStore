import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import { ArrowRight } from "../../Atoms/ArrowRight/index";
import { ArrowLeft } from "../../Atoms/ArrowLeft/index";
import { FilterCategoryDropDown } from "../FilterCategoryDropDown/index";

import "./style.css";

export const FilterSection = (props) => {
  const { nextClick, prevClick, currentPage, maxPage } = props;
  const isMaxPage = currentPage === maxPage;

  return (
    <Container className="filter-container">
      <Header className="flex-filter">
        {`Page ${currentPage} of ${maxPage}`}
        <FilterCategoryDropDown hidden={props.hidden}/>
        <div>
          <ArrowLeft
            size="38"
            marginRight="5px"
            onClick={prevClick}
            disabled={!isMaxPage}
          />

          <ArrowRight size="38" onClick={nextClick} disabled={isMaxPage} />
        </div>
      </Header>
      <Divider />
    </Container>
  );
};
