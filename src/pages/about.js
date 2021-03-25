import React from "react";

import { Row, Column, Spacer } from "../components/defaults";
import { COLORS } from "../lib/constants";
import styled from "styled-components";
import Page from "../layouts/index";

const About = () => {
	// const small = window.matchMedia("(min-width: 0px) and (max-width: 700px)");
	// const medium = window.matchMedia(
	// 	"(min-width: 700px) and (max-width: 1024px)"
	// );
	// const large = window.matchMedia("(min-width: 1024px)");
	return (
		<Page>
			<ContentContainer>
				<NameTitle>About Ashley</NameTitle>
				<Row>
					<NarrowColumn>
						<SubTitle>Dance</SubTitle>
						<Description>
							Ever since I started liking K-pop in middle school,
							I followed along with choreography and self-taught
							myself dance. I never joined any dance teams until I
							entered university to which I started to understand
							that I needed to learn the fundamentals before I
							continued. As of right now, I'm re-learning the
							fundamentals of dance and about the history of each
							move as they connect with marginalized communities.
						</Description>
					</NarrowColumn>
					<Spacer x={50} />
					<iframe
						title="Samahang Modern 2020 SoCal Prelude"
						src="//drive.google.com/file/d/1rLEbN4z-2Q5lKYS6bY47Lk70Du7aQdep/preview"
						width="600"
						height="400"
					></iframe>
				</Row>
				<Spacer y={50} />
				<Row>
					<StyledImg
						src="static/Nova.png"
						alt="Nova, Tech for Good"
					/>
					<Spacer x={50} />
					<NarrowColumn right={true}>
						<SubTitle>Social Good</SubTitle>
						<Description>
							I spent a lot of time learning about the world after
							high school and discovered that I was living in a
							bubble for a majority of my life. Given the
							disillusionment that follows with it, I decided that
							I wanted to utilize my expertise to improve the
							community bit by bit. I joined Nova, Tech for Good
							and exploretech.la-- two technology-based student
							organizations that strive to bring technology to
							those who typically don't have a lot of access to
							it.
						</Description>
					</NarrowColumn>
				</Row>
				<Spacer y={50} />
				<Row>
					<NarrowColumn>
						<SubTitle>Language</SubTitle>
						<Description>
							Mandarin, Korean, English, and the bodily expression
							of dance.
						</Description>
					</NarrowColumn>
					<Spacer x={50} />
					<StyledImg src="static/language.jpg" alt="DuoLingo Owl" />
				</Row>
			</ContentContainer>
		</Page>
	);
};

export default About;

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

const NarrowColumn = styled(Column)`
	width: 60%;
	${({ right }) => (right ? "text-align: right;" : "")}
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

const SubTitle = styled("h4")`
	width: 100%;
	color: ${COLORS.DAWN_PINK};
	font-size: 104px;
`;

const Description = styled("div")`
	font-family: "Sanchez";
	font-size: 24px;
	color: ${COLORS.SANDY_BEACH};
`;

const StyledImg = styled("img")`
	width: 35%;
`;
