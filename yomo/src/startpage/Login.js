import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import App from '../App';
import SignUp from './Signup';

function Login() {
	return (
		<>
			<YellowBody>
				<Title>Login</Title>
				<Loginbox>Username</Loginbox>
				<Loginbox>Password</Loginbox>
				<Loginbox>Google 계정으로 로그인</Loginbox>
				<Link to="/groupbuying" style={{ textDecoration: 'none' }}>
					<LoginBtn>Login</LoginBtn>
				</Link>
				<SignupLink to="/signup">회원가입</SignupLink>
			</YellowBody>
		</>
	);
}

export const Title = styled.div`
	font-size: 56pt;
	font-weight: 400;
	text-align: center;
	line-height: 100pt;
	color: #ff7272;
`;

export const YellowBody = styled.body`
	position: fixed;
	background-color: #fff1b8;
	box-sizing: border-box;
	height: 1024px;
	width: 100%;
`;

export const Loginbox = styled.div`
	box-sizing: border-box;
	width: 591px;
	height: 76px;
	border-radius: 50px;
	text-align: center;
	background-color: #fff1b8;
	border-color: #000000;
	border: 2px solid #000000;
	padding: 25px;
	font-size: 18pt;
	margin: 25px auto;
`;

export const LoginBtn = styled.button`
	display: block;
	box-sizing: border-box;
	width: 591px;
	height: 76px;
	border-radius: 50px;
	text-align: center;
	background-color: #ff7272;
	padding: 25px;
	font-size: 18pt;
	color: #ffffff;
	margin: 25px auto;
	border: 0;
`;

export const SignupLink = styled(Link)`
	display: block;
	margin: auto;
	text-decoration: none;
	text-align: center;
	font-size: 18pt;
	color: #000000; ;
`;

export default Login;
