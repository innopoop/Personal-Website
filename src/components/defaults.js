import styled from "styled-components";
import { COLORS } from "../lib/constants";

export const Text = styled("div")`
	${(props) => {
		switch (props.type) {
			case "title":
				return `
					color: ${COLORS.DAWN_PINK};
					font-family: "Reenie Beanie", cursive;
					@media screen and (min-width: 1024px) {
						font-size: 180px;
					}
					@media screen and (min-width: 700px) and (max-width: 1024px) {
						font-size: 150px;
					}
					@media screen and (min-width: 0px) and (max-width: 700) {
						font-size: 130px;
					}
				`;
			case "subtitle":
				return `
					color: ${COLORS.DAWN_PINK};
					font-family: "Reenie Beanie", cursive;
					@media screen and (min-width: 1024px) {
						font-size: 60px;
					}
					@media screen and (min-width: 700px) and (max-width: 1024px) {
						font-size: 45px;
					}
					@media screen and (min-width: 0px) and (max-width: 700) {
						font-size: 30px;
					}
				`;
			case "secondary-title":
				return `
					color: ${COLORS.SANDY_BEACH};
					font-family: Sanchez;
					font-weight: bold;
					@media screen and (min-width: 1024px) {
						font-size: 50px;
					}
					@media screen and (min-width: 700px) and (max-width: 1024px) {
						font-size: 30px;
					}
					@media screen and (min-width: 0px) and (max-width: 700) {
						font-size: 18px;
					}
				`;
			case "secondary-subtitle":
				return `
					color: ${COLORS.SANDY_BEACH};
					font-family: Sanchez;
					@media screen and (min-width: 1024px) {
						font-size: 24px;
					}
					@media screen and (min-width: 700px) and (max-width: 1024px) {
						font-size: 18px;
					}
					@media screen and (min-width: 0px) and (max-width: 700) {
						font-size: 14px;
					}
				`;
			default:
				return `
					color: ${COLORS.SANDY_BEACH};
					font-family: Sanchez;
					font-size: 14px;
				`;
		}
	}}
`;

export const Spacer = styled.div`
	flex-shrink: 0;
	height: ${({ y }) => (y ? `${y}px` : 0)};
	width: ${({ x }) => (x ? `${x}px` : 0)};
`;

export const Row = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
	align-items: ${({ align }) => (align ? align : "flex-start")};
	width: ${({ width }) => (width ? width : "auto")};
	height: ${({ height }) => (height ? height : "auto")};
	${({ style }) => style}
`;

export const Column = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
	align-items: ${({ align }) => (align ? align : "flex-start")};
	width: ${({ width }) => (width ? width : "auto")};
	height: ${({ height }) => (height ? height : "auto")};
	${({ style }) => style}
`;
