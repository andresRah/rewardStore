import React, { useReducer } from "react";
import { Button, Modal } from "semantic-ui-react";
import addCoinsModalReducer from "./reducer";

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
          <Modal.Header>Use Google's location service?</Modal.Header>
          <Modal.Content>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
              Disagree
            </Button>
            <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
              Agree
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };
};

export default withAddCoinsModal;
