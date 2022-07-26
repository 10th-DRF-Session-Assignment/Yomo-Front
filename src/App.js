import React, { Component, useState, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './header';
import Login from './startpage/Login';
import SignUp from './startpage/Signup';
import GroupBuying from './board/GroupBuying/GroupBuying';
import Sharing from './board/Sharing/Sharing';
import Friending from './board/Friending/Friending';
import Start from './startpage/Start';
import BoardWrite from './BoardWrite';
import BoardEditor from './board/GroupBuying/BoardEditorBuying';
import MyPage from './mypage/MyPage';

const App = () => {
	const [data, setData] = useState([]);

	const dataId = useRef(0);

	const onCreate = (author, content, space) => {
		const created_date = new Date().getTime();
		const newItem = {
			author,
			content,
			space,
			created_date,
			id: dataId.current,
		};
		dataId.current += 1;
		setData([newItem, ...data]);
	};

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
							<Route path="/write" element={<BoardEditor />} />
							<Route path="/mypage" element={<MyPage />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
