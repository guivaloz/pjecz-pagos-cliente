import styled from 'styled-components';

export const Box = styled.div`
padding: 20px 20px;
background: #004360;
position: fixed;
bottom: 0;
width: 100%;
margin-left:-50px;

@media (max-width: 1000px) {
	padding: 20px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	border: 0px solid #555;

`

export const Column = styled.div`
display: inline;
flex-direction: column;
text-align: center;
margin-left: 60px;
border:0px solid red;
`;

export const Row = styled.div`
margin-left:0px;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
border:0px solid white;

&:hover {
	font-weight: bold;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
