import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
        <RiShoppingBag3Fill color="action" onClick={showDrawer} className="text-2xl text-gray-900" />
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Cart;
