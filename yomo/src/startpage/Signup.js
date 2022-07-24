import React from 'react';
import { Link, Route } from 'react-router-dom';
import App from '../App';
import Login from './Login';

export default function SignUp() {
	const SignUpBtnClick = () => {
		document.location.href('/');
	};

	return (
		<>
			<div className="SignUpBody">
				<h1>회원가입 페이지</h1>
				<div className="LoginContainer">
					<div className="SignUpTitle">Sign Up</div>
					<input type="text" placeholder="Username"></input>
					<input type="text" placeholder="Password"></input>
					<button onClick={SignUpBtnClick}>Sign Up</button>
				</div>
			</div>
		</>
	);
}
