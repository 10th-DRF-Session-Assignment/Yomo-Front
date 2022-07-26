import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Login from './startpage/Login';
import SignUp from './startpage/Signup';
import NavUserImg from './image 6.svg';
import LogoImg from './image 20.svg';

export default function Header() {
	return (
		<div className="header">
			<Navbar>
				<img src={LogoImg} style={{ width: '35px' }} />
				<StyledLink to="/" style={title} className="title">
					YOMO
				</StyledLink>
				<StyledLink
					to="/GroupBuying"
					style={boardname}
					activeStyle={{ fontWeight: '900' }}
					className="boardname"
				>
					공구해요
				</StyledLink>
				<StyledLink to="/Sharing" style={boardname} className="boardname">
					나눔해요
				</StyledLink>
				<StyledLink to="/Friending" style={boardname} className="boardname">
					친구해요
				</StyledLink>
				<Link to="/mypage">
					<img
						src={NavUserImg}
						style={{ marginLeft: '100px', width: '35px' }}
					/>
				</Link>
				<StyledLink to="/login" style={login} className="login">
					Login
				</StyledLink>
			</Navbar>
		</div>
	);
}

// Style

const title = {
	color: '#F88908',
	marginRight: '100px',
	marginLeft: '10px',
};

const boardname = {
	color: '#FF7272',
	marginLeft: '100px',
	marginRight: '100px',
};

const login = {
	color: '#000000',
	marginLeft: '10px',
};

const selected = {
	fontWeight: '900',
};

export const Navbar = styled.div`
	height: 117px;
	background-color: #fff1b8;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const StyledLink = styled(NavLink)`
	box-sizing: border-box;
	display: block;
	margin-left: 80px;
	margin-right: 80px;
	text-align: center;
	text-decoration: none;
	font-size: 20pt;
	font-weight: 500;
`;
