import React, { useContext } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { AppContext } from "../../../providers/ContextProvider";

export const ResultOperationModal = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Modal
      basic
      onClose={() => dispatch({ type: "CLOSE_MODAL_OPERATION" })}
      onOpen={() => dispatch({ type: "OPEN_MODAL_OPERATION" })}
      open={state.modalOperationStatus}
      size="small"
    >
      <Header icon>
        {state.modalOperationError ? (
          <>
            <Icon name="times circle outline" />
            Error, your product didn't have redeemed
          </>
        ) : (
          <>
            <Icon name="thumbs up outline" />
            Product redeemed successfully
          </>
        )}
      </Header>
      <Modal.Content>
        {state.modalOperationError ? (
          <p>
            Error in the redemption process, please try again some minutes
            later. The system is currently not working fine. Thanks for your
            understanding.
          </p>
        ) : (
          <p>
            Your balance has changed, thank you for your point redemption. There
            are a lot of item more waiting for you.
          </p>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button
          color={state.modalOperationError ? "red" : "green"}
          inverted
          onClick={() => dispatch({ type: "CLOSE_MODAL_OPERATION" })}
        >
          <Icon name="checkmark" /> Accept
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
