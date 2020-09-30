import React, { useContext } from "react";
import { Dropdown } from "semantic-ui-react";
import { AppContext } from "../../../providers/ContextProvider";

import All from '../../../assets/png/compras.png'
import Cameras from '../../../assets/png/camara.png'
import Smarthphone from '../../../assets/png/smartphone.png'
import GameBoy from '../../../assets/png/gameboy.png'
import Audio from '../../../assets/png/altavoces.png'
import Laptop from '../../../assets/png/laptop.png'
import Drone from '../../../assets/png/zangano.png'
import TV from '../../../assets/png/tv.png'
import Casa from '../../../assets/png/casa.png'
import Ordenador from '../../../assets/png/ordenador.png'
import Tablet from '../../../assets/png/examen.png'
import PhoneAccesories from '../../../assets/png/phoneAccesories.png'

const friendOptions = [
  {
    key: "All",
    text: "All",
    value: "All",
    image: {
      avatar: true,
      src: All
    },
  },
  {
    key: "Phones",
    text: "Phones",
    value: "Phones",
    image: {
      avatar: true,
      src: Smarthphone,
    },
  },
  {
    key: "Cameras",
    text: "Cameras",
    value: "Cameras",
    image: {
      avatar: true,
      src: Cameras,
    },
  },
  {
    key: "Gaming",
    text: "Gaming",
    value: "Gaming",
    image: {
      avatar: true,
      src: GameBoy,
    },
  },
  {
    key: "Laptops",
    text: "Laptops",
    value: "Laptops",
    image: {
      avatar: true,
      src: Laptop,
    },
  },
  {
    key: "Audio",
    text: "Audio",
    value: "Audio",
    image: {
      avatar: true,
      src: Audio,
    },
  },
  {
    key: "Drones",
    text: "Drones",
    value: "Drones",
    image: {
      avatar: true,
      src: Drone,
    },
  },
  {
    key: "Monitors & TV",
    text: "Monitors & TV",
    value: "Monitors & TV",
    image: {
      avatar: true,
      src: TV,
    },
  },
  {
    key: "Phone Accessories",
    text: "Phone Accessories",
    value: "Phone Accessories",
    image: {
      avatar: true,
      src: PhoneAccesories,
    },
  },
  {
    key: "Tablets & E-readers",
    text: "Tablets & E-readers",
    value: "Tablets & E-readers",
    image: {
      avatar: true,
      src: Tablet,
    },
  },
  {
    key: "PC Accesories",
    text: "PC Accesories",
    value: "PC Accesories",
    image: {
      avatar: true,
      src: Ordenador,
    },
  },
  {
    key: "Smart Home",
    text: "Smart Home",
    value: "Smart Home",
    image: {
      avatar: true,
      src: Casa,
    },
  },
];

export const FilterCategoryDropDown = ({hidden}) => {
  const { state, dispatch } = useContext(AppContext);

  const onCategorySelected = (e, data) => {
    e.preventDefault();
    dispatch({ type: "LOADING" });
    dispatch({ type: "CATEGORY_FILTER_SELECTED", data: data.value });
  };

  return (
    <span hidden={hidden}>
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
