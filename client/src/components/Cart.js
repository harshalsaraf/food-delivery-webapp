import React, { useState } from "react";
import { Table, Button } from "antd";
import { useCart } from "./ContextReducer";

import { useDispatchCart } from "./ContextReducer";
const Cart = () => {
  let cartData = useCart();
  let dispatchCart = useDispatchCart();
  const [serialNumber, setserialNumber] = useState("0");
  const handleClick = (id) => {
    dispatchCart({
      type: "REMOVE",
      index: id,
    });
  };
  const indexNumber = (id) => {
    // setserialNumber(serialNumber++);
    if (true) {
      setserialNumber(serialNumber++);
    }
    return serialNumber;
  };
  const columns = [
    {
      title: "Sr. No.",
      dataIndex: "id",
      render: (id) => cartData.findIndex((item) => item.id === id) + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Option",
      dataIndex: "size",
      key: "option",
    },
    {
      title: "Amount",
      dataIndex: "price",
      key: "amount",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a onClick={(id) => handleClick(id)}>Delete</a>,
    },
  ];
  return (
    <div style={{ marginTop: "20px" }}>
      <Table
        dataSource={cartData}
        columns={columns}
        bordered
        summary={(pageData) => {
          let totalPrice = 0;
          pageData.forEach(({ price }) => {
            totalPrice += price;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={5}>
                  Rs.{totalPrice}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
      <Button type="primary" style={{ display: "flex", margin: "auto" }}>
        Check Out!
      </Button>
    </div>
  );
};

export default Cart;
