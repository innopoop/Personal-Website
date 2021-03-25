import React from "react";

import { Text, Row, Column, Spacer } from "../components/defaults";
import styled from "styled-components";
import Page from "../layouts/index";

const Socials = {
	email: "ashley.t.zhu@gmail.com",
	phone: "(925) 660 - 2551",
	instagram: "@kissmesone",
	facebook: "https://facebook.com/catpls",
	discord: "catpls#8790",
};

const Contact = () => {
	// const small = window.matchMedia("(min-width: 0px) and (max-width: 700px)");
	// const medium = window.matchMedia(
	// 	"(min-width: 700px) and (max-width: 1024px)"
	// );
	// const large = window.matchMedia("(min-width: 1024px)");
	return (
		<Page>
			<ContentContainer>
				<Text type="title">Contact Me</Text>
				<Column>
					{Object.keys(Socials).map((platform) => {
						console.log(platform, Socials[platform]);
						return (
							<Row>
								<Text type="subtitle">{platform}:</Text>
								<Spacer x={10} />
								<Text>{Socials[platform]}</Text>
							</Row>
						);
					})}
				</Column>
			</ContentContainer>
		</Page>
	);
};

export default Contact;

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
