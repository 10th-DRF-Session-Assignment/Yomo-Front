import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import App from '../App';
import Login, { LoginBtn, SignupLink, Title } from './Login';
import { YellowBody } from './Login';

export default function SignUp() {
	return (
		<>
			<YellowBody>
				<Title>Sign Up</Title>
				<SignupInput type="text" placeholder="Username"></SignupInput>
				<SignupInput type="text" placeholder="Password"></SignupInput>
				<Link to="/groupbuying" style={{ textDecoration: 'none' }}>
					<LoginBtn style={{ marginTop: '100px' }}>Sign Up</LoginBtn>
				</Link>
				<SignupLink to="/login">로그인 화면으로 돌아가기</SignupLink>
			</YellowBody>
		</>
	);
}

export const SignupInput = styled.input`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	display: block;
	border: 0;
	background-color: #fff1b8;
	border-bottom: 2px solid #000000;
	font-size: 18pt;
	width: 650px;
	margin: 60px auto;
`;
