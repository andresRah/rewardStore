import React, { useReducer } from "react";
import { Button, Modal } from "semantic-ui-react";
import addCoinsModalReducer from "./reducer";

export const AddCoinsModal = () => {
  const [state, dispatch] = useReducer(addCoinsModalReducer, {
    open: false,
    dimmer: undefined,
  });

  const { open, dimmer } = state;

  return (
    <div>
      <Button
        onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
      >
        Blurring
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
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
