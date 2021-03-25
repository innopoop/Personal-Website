import React from "react";
import { Link } from "gatsby";
import { Column, Row, Spacer } from "../components/defaults";
import { COLORS } from "../lib/constants";
import styled from "styled-components";
import Page from "../layouts/index";
// markup
const IndexPage = () => {
	const small = window.matchMedia("(min-width: 0px) and (max-width: 700px)");
	const medium = window.matchMedia(
		"(min-width: 700px) and (max-width: 1024px)"
	);
	const large = window.matchMedia("(min-width: 1024px)");
	console.log(small.matches, medium.matches, large.matches);
	console.log(Column, Row, Spacer);
	return (
		<Page>
			<ContentContainer>
				<Column height="100%" justify="space-evenly">
					<NameTitle>Ashley Zhu</NameTitle>
					<Spacer y={small.matches ? 0 : 40} />
					{small.matches ? (
						<Column>
							<BorderedImage src="static/Spring_Me.jpg" />
							<LoadingImg src="static/Loading.svg" />
							<TwoByTwo>
								<LinkContainer>
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
								</LinkContainer>
							</TwoByTwo>
						</Column>
					) : (
						<EvenRow width="100%">
							<BorderedImage src="static/Spring_Me.jpg" />
							<LoadingImg src="static/Loading.svg" />{" "}
							<LinkContainer>
								<Column height="100%" justify="space-evenly">
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
						</EvenRow>
					)}
					<Spacer y={small.matches ? 25 : 50} />
					<Quote>
						Before being a student, engineer, or dancer, I’m human
						first.
					</Quote>
				</Column>
			</ContentContainer>
		</Page>
	);
};

export default IndexPage;

// styles

// const InnerPage = styled("div")`
// 	width: 100vw;
// 	height: 100vh;
// 	overflow-x: hidden;
// 	overflow-y: scroll;
// `;

const ContentContainer = styled("div")`
	height: 90%;
	width: 90%;
	@media screen and (min-width: 1024px) {
		margin: 5vh;
	}
	@media screen and (min-width: 700px) and (max-width: 1024px) {
		margin: 3vh;
	}
	@media screen and (min-width: 0px) and (max-width: 700px) {
		margin: 1vh;
	}
`;

const BorderedImage = styled("img")`
	height: 40vh;
	border: 6px solid ${COLORS.DAWN_PINK};
	border-radius: 2px;
	object-fit: cover;
	@media screen and (min-width: 0px) and (max-width: 700px) {
		margin: 1vh;
		height: 35vh;
	}
`;

const LoadingImg = styled("img")`
	width: 10%;
	height: auto;
	@media screen and (min-width: 0px) and (max-width: 700px) {
		display: none;
	}
`;

const NameTitle = styled("h1")`
	color: ${COLORS.DAWN_PINK};
	@media screen and (min-width: 1024px) {
		font-size: 180px;
	}
	@media screen and (min-width: 700px) and (max-width: 1024px) {
		font-size: 150px;
	}
	@media screen and (min-width: 0px) and (max-width: 700) {
		font-size: 130px;
		text-align: center;
	}
`;

const EvenRow = styled(Row)`
	justify-content: space-evenly;
	align-items: center;
`;

const TwoByTwo = styled("div")`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
	text-align: center;
`;

const Button = styled("div")`
	font-family: "Sanchez";
	font-size: 48px;
	color: ${COLORS.SANDY_BEACH};
	filter: drop-shadow(3px 3px 1px ${COLORS.GIMBLET});
	cursor: pointer;
`;

const Quote = styled("h1")`
	color: ${COLORS.DAWN_PINK};
	font-size: 60px;
	@media screen and (min-width: 0px) and (max-width: 768px) {
		text-align: center;
		font-size: 35px;
	}
`;

const LinkContainer = styled("div")`
	height: 100%;
	* {
		text-decoration: none;
	}
`;
