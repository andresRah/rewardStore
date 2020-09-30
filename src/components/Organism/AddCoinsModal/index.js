import React, { useReducer, useContext, useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import { DropdownIcon } from "../../Atoms/DropdownIcon/index";
import addCoinsModalReducer from "./reducer";
import { AppContext } from "../../../providers/ContextProvider";

import singleCoin from "../../../assets/png/single_coin.png";
import coin from "../../../assets/png/bitcoin.png";
import cash from "../../../assets/png/efectivo.png";

import { callServiceAPI } from "../../../utils/services";

const coinsOptions = [
  {
    key: "1000",
    text: "Basic $1.000",
    value: "1000",
    image: { avatar: true, src: singleCoin },
  },
  {
    key: "5000",
    text: "Advanced $5.000",
    value: "5000",
    image: { avatar: true, src: coin },
  },
  {
    key: "7500",
    text: "Professional $7.500",
    value: "7500",
    image: { avatar: true, src: cash },
  },
];

const withAddCoinsModal = (Component) => {
  return function AddCoinsModal(props) {
    const { dispatch } = useContext(AppContext);
    const [numberCoins, setNumberCoins] = useState(0);

    const [modalState, modalDispatch] = useReducer(addCoinsModalReducer, {
      open: false,
      dimmer: undefined,
    });
    const { open, dimmer } = modalState;

    // #region Events
    const addPoints = async () => {
      let bodyData = {
        amount: parseInt(numberCoins),
      };

      dispatch({ type: "LOADING" });

      let body = JSON.stringify(bodyData);
      const newAmount = await callServiceAPI("/user/points", "POST", body);

      dispatch({ type: "UPDATED_TOTAL_AMOUNT", data: newAmount["New Points"] });
    };

    const selectNumberCoins = (e, data) => {
      e.preventDefault();
      setNumberCoins(data.value);
    };

    // #endregion Events

    return (
      <div>
        <Component
          text={props.text}
          onClick={() =>
            modalDispatch({ type: "OPEN_MODAL", dimmer: "blurring" })
          }
        />

        <Modal
          dimmer={dimmer}
          open={open}
          onClose={() => modalDispatch({ type: "CLOSE_MODAL" })}
        >
          <Modal.Header>Add new Coins</Modal.Header>
          <Modal.Content>
            <Header as="h3">
              Please select the number of coins that you want to add to the
              current budget.
            </Header>

            <DropdownIcon
              options={coinsOptions}
              placeholder="select the number of coins to recharge"
              selectedItem={selectNumberCoins}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              negative
              onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
            >
              Cancel
            </Button>
            <Button positive onClick={addPoints} disabled={numberCoins === 0 ? true:false}>
              Accept
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };
};

export default withAddCoinsModal;
