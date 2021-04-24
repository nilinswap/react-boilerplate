import React from "react";
import Game from "./Game";

export default {
    title: "Game"
};

export const WithBar = () => <Game foo="bar" />;

export const WithBaz = () => <Game foo="baz" />;
