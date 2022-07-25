import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import SignUp from './Signup';

function Login() {
	const LoginBtnClick = () => {
		document.location.href('/');
	};

	return (
		<>
			<h1>로그인 페이지</h1>
			<body>
				<div className="LoginContainer">
					<span className="LoginTitle">Login</span>
					<div className="UserName">Username</div>
					<div className="PassWord">Password</div>
					<div className="GoogleAccount">Google 계정으로 로그인</div>
					<button className="LoginBtn" onClick={LoginBtnClick}>
						Login
					</button>

					<Link to="/signup">회원가입</Link>
				</div>
			</body>
		</>
	);
}

export default Login;