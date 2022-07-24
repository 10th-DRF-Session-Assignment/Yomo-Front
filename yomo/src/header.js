import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './startpage/Login';
import SignUp from './startpage/Signup';

export default function Header() {
	return (
		<div className="header">
			<h3>
				<Link to="/">YOMO</Link>
				<Link to="/GroupBuying">공구해요</Link>
				<Link to="/Sharing">나눔해요</Link>
				<Link to="/Friending">친구해요</Link>
				<Link to="/login">Login</Link>
			</h3>
		</div>
	);
}
