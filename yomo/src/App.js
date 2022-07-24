import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './header';
import Login from './startpage/Login';
import SignUp from './startpage/Signup';
import GroupBuying from './board/GroupBuying';
import Sharing from './board/Sharing';
import Friending from './board/Friending';
import Start from './startpage/Start';

const App = () => {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Header />
					<div>
						<Routes>
							<Route path="/" element={<Start />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/groupbuying" element={<GroupBuying />} />
							<Route path="/sharing" element={<Sharing />} />
							<Route path="/friending" element={<Friending />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
