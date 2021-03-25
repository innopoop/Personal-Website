import React from "react";

import { Text, Row, Column, Spacer } from "../components/defaults";
import { COLORS } from "../lib/constants";
import styled from "styled-components";
import Page from "../layouts/index";

class Project {
	constructor(name, title, role, preview = "") {
		this.name = name;
		this.title = title;
		this.role = role;
		this.preview = preview;
	}
}

class ProjectList {
	constructor() {
		this.projects = [];
	}

	addProject(name, title, role, preview) {
		let p = new Project(name, title, role, preview);
		this.projects.push(p);
		return p;
	}

	getProjects() {
		return this.projects;
	}
}

const IndividualProjects = new ProjectList();
const TeamProjects = new ProjectList();
IndividualProjects.addProject(
	"E-commerce website with React, Stripe, & Firebase",
	"Udemy Course",
	""
);
IndividualProjects.addProject(
	"Video Streaming Chrome Extension",
	"",
	"Youtube & Chrome API"
);
TeamProjects.addProject(
	"Data Analysis with the Friends of the Semel Institute for Neuroscience and Human Behavior",
	"Data Visualizer",
	"Mapbox data visualization and manipulation and analysis with Python libraries"
);
TeamProjects.addProject(
	"Mental Wellness Choose Your Own Adventure Journey",
	"Front-end Web Development Intern",
	"Created a figma-esque story creation screen that experts in mental health could write stories with to educate readers about mental health"
);

const Projects = () => {
	// const small = window.matchMedia("(min-width: 0px) and (max-width: 700px)");
	// const medium = window.matchMedia(
	// 	"(min-width: 700px) and (max-width: 1024px)"
	// );
	// const large = window.matchMedia("(min-width: 1024px)");
	return (
		<Page>
			<ContentContainer>
				<Text type="title">Projects</Text>
				<Row width="100%">
					<Column width="50%">
						<Text type="secondary-title">Individual</Text>
						{IndividualProjects.getProjects().map((project) => {
							return (
								<React.Fragment key={project.name}>
									<TableDivide />
									<DetailsTable>
										<Text type="secondary-subtitle">
											{project.name}
										</Text>
										<Text type="secondary-subtitle">
											{project.title}
										</Text>
										<Text type="secondary-subtitle">
											{project.role}
										</Text>
									</DetailsTable>
								</React.Fragment>
							);
						})}
					</Column>
					<Spacer x={50} />
					<Column width="50%">
						<Text type="secondary-title">Team</Text>
						{TeamProjects.getProjects().map((project) => {
							return (
								<React.Fragment key={project.name}>
									<TableDivide />
									<DetailsTable>
										<Text type="secondary-subtitle">
											{project.name}
										</Text>
										<Text type="secondary-subtitle">
											{project.title}
										</Text>
										<Text type="secondary-subtitle">
											{project.role}
										</Text>
									</DetailsTable>
								</React.Fragment>
							);
						})}
					</Column>
				</Row>
			</ContentContainer>
		</Page>
	);
};

export default Projects;

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

const DetailsTable = styled("div")`
	color: ${COLORS.DAWN_PINK};
	font-family: Sanchez;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;
`;

const TableDivide = styled("hr")`
	width: 100%;
	color: ${COLORS.DAWN_PINK};
	background-color: ${COLORS.DAWN_PINK};
	height: 5px;
`;
