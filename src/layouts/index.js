import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { COLORS } from "../lib/constants";
import "@fontsource/reenie-beanie";
import "@fontsource/sanchez";
import "./index.css";

import Picture from "../../public/static/Menu.svg";
import SlidingMenu from "../components/SlidingMenu";

const Page = ({ children, props, location }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [landing, setLanding] = useState(true);
	useEffect(() => {
		console.log(window.location.pathname);
		if (typeof window !== "undefined" && window.location.pathname !== "/")
			setLanding(false);
	}, []);

	console.log(landing);
	return (
		<Container>
			{landing ? (
				<></>
			) : (
				<>
					<SlidingMenu open={menuOpen} />
					<IconButton
						src={Picture}
						onClick={() => {
							setMenuOpen(!menuOpen);
						}}
					/>
				</>
			)}
			<Background {...props}>{children}</Background>
		</Container>
	);
};

export default Page;

const Container = styled("div")`
	overflow: hidden;
`;

const Background = styled("div")`
	background-color: ${COLORS.SEPIA_BLACK};
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 0;
`;

const IconButton = styled("img")`
	height: 4vh;
	position: absolute;
	right: 2vw;
	top: 2vh;
	cursor: pointer;
	z-index: 1;
`;
