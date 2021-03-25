import React from "react";

import styled from "styled-components";
import { COLORS } from "../lib/constants";
import "@fontsource/reenie-beanie";
import "@fontsource/sanchez";
import "./index.css";

const Background = styled.div`
	background-color: ${COLORS.SEPIA_BLACK};
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: scroll;
`;

const Page = ({ children, props }) => {
	return <Background {...props}>{children}</Background>;
};

export default Page;
