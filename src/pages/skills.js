import React from "react";

import { Text, Row, Column, Spacer } from "../components/defaults";
import { COLORS } from "../lib/constants";
import styled from "styled-components";
import Page from "../layouts/index";

const Information = {
	Proficient: [
		"C++",
		"Python",
		"Javascript",
		"React/NextJS",
		"CSS",
		"Firebase",
	],
	Intermediate: ["Typescript", "Node/Express", "C"],
	Novice: ["AdobeXD", "Photoshop", "Java", "Jira"],
};

const About = () => {
	// const small = window.matchMedia("(min-width: 0px) and (max-width: 700px)");
	// const medium = window.matchMedia(
	// 	"(min-width: 700px) and (max-width: 1024px)"
	// );
	// const large = window.matchMedia("(min-width: 1024px)");
	return (
		<Page>
			<ContentContainer>
				<Text type="title">Skills</Text>
				<Row width="100%">
					{Object.keys(Information).map((proficiency) => {
						return (
							<>
								<SkillsTable key={proficiency}>
									<Text type="secondary-title">
										{proficiency}
									</Text>
									<TableDivide />
									{Information[proficiency].map((item) => (
										<Text type="secondary-subtitle">
											{item}
										</Text>
									))}
								</SkillsTable>
								<Spacer x={40} />
							</>
						);
					})}
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

const SkillsTable = styled("div")`
	color: ${COLORS.DAWN_PINK};
	font-family: Sanchez;
	display: grid;
	grid-template-columns: 1fr;
	width: 30%;
`;

const TableDivide = styled("hr")`
	color: ${COLORS.DAWN_PINK};
	background-color: ${COLORS.DAWN_PINK};
	height: 5px;
`;
