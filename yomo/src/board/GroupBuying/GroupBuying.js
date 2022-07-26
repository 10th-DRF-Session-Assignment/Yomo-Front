import React, { Component, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BoardList from './BoardListBuying.js';
import BoardEditor from './BoardEditorBuying.js';
import styled from 'styled-components';
import writeButtonImg from '../GroupBuying/writeButton.png';
import BoardItem from './BoardItemBuying.js';

export const BoardTitleDiv = styled.div`
	margin: 15px auto;
	width: 80%;
	height: 122px;
	box-sizing: border-box;
	background: #ffc3c3;
`;

export const BoardTitle = styled.div`
	padding: auto;
	/* text-align: center; */
	font-size: 36px;
	color: #000000;
`;

export const WriteButton = styled.div`
	position: relative;
	width: 50px;
	height: 50px;
	left: 1050px;
`;

export default function GroupBuying() {
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
		<div>
			<BoardTitleDiv>
				<BoardTitle>기숙사 공구 게시판</BoardTitle>
				<BoardItem />
				<WriteButton>
					<Link to="/write">
						<img src={writeButtonImg} />
					</Link>
				</WriteButton>
			</BoardTitleDiv>
			<BoardList boardList={data} />
		</div>
	);
}
