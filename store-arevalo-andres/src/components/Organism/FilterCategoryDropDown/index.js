import React, { useContext } from "react";
import { Dropdown } from "semantic-ui-react";
import { AppContext } from "../../../providers/ContextProvider";

const friendOptions = [
  {
    key: "All",
    text: "All",
    value: "All",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
    },
  },
  {
    key: "Phones",
    text: "Phones",
    value: "Phones",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
    },
  },
  {
    key: "Gaming",
    text: "Gaming",
    value: "Gaming",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
    },
  },
  {
    key: "Laptops",
    text: "Laptops",
    value: "Laptops",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
    },
  },
  {
    key: "Monitors & TV",
    text: "Monitors & TV",
    value: "Monitors & TV",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
    },
  },
];

export const FilterCategoryDropDown = () => {
  const { state, dispatch } = useContext(AppContext);

  const onCategorySelected = (e, data) => {
    e.preventDefault();
    dispatch({ type: "LOADING" });
    dispatch({ type: "CATEGORY_FILTER_SELECTED", data: data.value });
  };

  return (
    <span>
      Filter by category {"   "}
      <Dropdown
        inline
        options={friendOptions}
        defaultValue={state.filterbyCategory}
        onChange={onCategorySelected}
      />
    </span>
  );
};
