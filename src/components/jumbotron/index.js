import React from "react";
import {
	Inner,
	Container,
	Title,
	SubTitle,
	Image,
	Pane
} from "./styles/jumbotron";

export default function Jumbotron({
	children,
	direction = "row",
	...restProps
}) {
	return (
		<Inner {...restProps} direction={direction}>
			{children}
		</Inner>
	);
}

Jumbotron.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...restProps }) => {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = ({ children, ...restProps }) => {
	return <Image {...restProps}>{children}</Image>;
};

Jumbotron.Pane = ({ children, ...restProps }) => {
	return <Pane {...restProps}>{children}</Pane>;
};
