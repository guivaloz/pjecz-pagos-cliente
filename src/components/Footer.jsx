import React from "react";
import {
	Box, Column, Container, FooterLink, Row
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<FooterLink href="aviso">Aviso de Privacidad</FooterLink>
		</Column>
		<Column>
			<FooterLink href="terminos">Terminos y Condiciones de Uso</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
