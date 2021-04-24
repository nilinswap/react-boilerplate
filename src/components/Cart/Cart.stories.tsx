import React from "react";
import Cart from "./Cart";

export default {
    title: "Cart"
};

export const WithBar = () => <Cart foo="bar" />;

export const WithBaz = () => <Cart foo="baz" />;
