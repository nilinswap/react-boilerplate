import React from "react";
import Login from "./Login";

export default {
    title: "Login"
};

export const WithBar = () => <Login foo="bar" />;

export const WithBaz = () => <Login foo="baz" />;
