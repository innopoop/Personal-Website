import React from "react";
import { Link } from "gatsby";

import { Column } from "./defaults";
import { colorToRgbValues } from "../lib/utils";
import { COLORS } from "../lib/constants";
import styled from "styled-components";

const SlidingMenu = ({ open }) => {
	console.log(open);
	return (
		<Container open={open}>
			<LinkContainer>
				<Column height="100%" justify="space-evenly">
					<Link to="/">
						<Button>Home</Button>
					</Link>
					<Link to="/about">
						<Button>About</Button>
					</Link>
					<Link to="/skills">
						<Button>Skills</Button>
					</Link>
					<Link to="/projects">
						<Button>Projects</Button>
					</Link>
					<Link to="/contact">
						<Button>Contact</Button>
					</Link>
				</Column>
			</LinkContainer>
		</Container>
	);
};

export default SlidingMenu;

const Container = styled("div")`
	background-color: ${() => {
		const rgbVals = colorToRgbValues(COLORS.FERRA);
		return `rgb(${rgbVals[0]}, ${rgbVals[1]}, ${rgbVals[2]}, 0.9)`;
	}};
	height: 100vh;
	width: 30vw;
	position: fixed;
	top: 0;
	right: -30vw;
	transition: transform 0.5s;
	transform: ${({ open }) =>
		open ? "translate(-30vw, 0)" : "translate(0,0)"};
`;

const Button = styled("div")`
	opacity: 1;
	font-family: "Sanchez";
	font-size: 48px;
	color: ${COLORS.SANDY_BEACH};
	&:hover {
		filter: drop-shadow(3px 3px 1px ${COLORS.GIMBLET});
	}
	cursor: pointer;
`;

const LinkContainer = styled("div")`
	margin: 36.3vh 0.9vw;
	height: 40vh;
	* {
		text-decoration: none;
	}
`;
