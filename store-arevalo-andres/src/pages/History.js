import React, { useEffect, useContext } from "react";
import Layout from "./Layout";
import { Header, Image, Table, Container } from "semantic-ui-react";

import { AppContext } from "../providers/ContextProvider";
import { callServiceAPI } from "../utils/services";

const History = () => {
  const { state, dispatch } = useContext(AppContext);
  const { userInfo } = state;

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "LOADING" });

      let userInformation = await callServiceAPI("/user/me", "GET");

      dispatch({ type: "LOAD_USERINFO", data: userInformation });
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Container className="table-margin">
        <Header as="h2">Redeemed Product History Table</Header>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Cost</Table.HeaderCell>
              <Table.HeaderCell>Redeemed Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {userInfo?.redeemHistory.map((item) => (
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image src={item.img.url} rounded size="mini" />
                    <Header.Content>
                      {item.name}
                      <Header.Subheader>{item.category}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.cost}</Table.Cell>
                <Table.Cell>{item.createDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </Layout>
  );
};

export default History;
