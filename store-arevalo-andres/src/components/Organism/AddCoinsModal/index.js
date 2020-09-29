import React, { useReducer } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import { DropdownIcon } from "../../Atoms/DropdownIcon/index";
import addCoinsModalReducer from "./reducer";

import singleCoin from "../../../assets/png/single_coin.png";
import coin from "../../../assets/png/bitcoin.png";
import cash from "../../../assets/png/efectivo.png";

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
    const [state, dispatch] = useReducer(addCoinsModalReducer, {
      open: false,
      dimmer: undefined,
    });

    const { open, dimmer } = state;

    return (
      <div>
        <Component
          text={props.text}
          onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
        />

        <Modal
          dimmer={dimmer}
          open={open}
          onClose={() => dispatch({ type: "CLOSE_MODAL" })}
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
            />
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
              Cancel
            </Button>
            <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
              Acept
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };
};

export default withAddCoinsModal;
