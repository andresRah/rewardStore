import React, { useState } from "react";
import {
  Card,
  Divider,
  Button,
  Dimmer,
  Header,
  Image,
  Icon,
} from "semantic-ui-react";

// import logo from "../../../assets/png/switch.png";

export const Product = () => {
  const [active, setActive] = useState(false);

  const handleShow = () => setActive(true);
  const handleHide = () => setActive(false);

  const content = (
    <div>
      <Header as="h2" inverted>
        Title
      </Header>

      <Button primary>Add</Button>
      <Button>View</Button>
    </div>
  );

  return (
    <Card>
      <Dimmer.Dimmable
        as={Image}
        blurring
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        size="medium"
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      />
      <Card.Content>
        <Divider clearing />
        <Card.Meta>Phones</Card.Meta>
        <Card.Description>iPhone 8</Card.Description>
      </Card.Content>
    </Card>
  );
};
