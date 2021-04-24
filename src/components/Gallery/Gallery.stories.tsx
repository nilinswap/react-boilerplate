import React from "react";
import Gallery from "./Gallery";

export default {
    title: "Gallery"
};

export const WithBar = () => <Gallery foo="bar" />;

export const WithBaz = () => <Gallery foo="baz" />;
