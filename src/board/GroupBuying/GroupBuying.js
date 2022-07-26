import React, { Component, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BoardList from './BoardListBuying.js';
import BoardEditor from './BoardEditorBuying.js';
import styled from 'styled-components';
import writeButtonImg from '../../writeButton.png';

export const BoardTitleDiv = styled.div`
	position: absolute;
	width: 1147px;
	height: 122px;
	left: 146px;
	top: 148px;

	background: #ffc3c3;
`;

export const BoardTitle = styled.span`
	position: relative;
	width: 675px;
	height: 41px;
	left: 381px;
	top: 40px;
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
				<WriteButton>
					<Link to="/write">
						<img src={writeButtonImg} />
					</Link>
				</WriteButton>
			</BoardTitleDiv>
			{/* <BoardEditor onCreate={onCreate} /> */}
			<BoardList boardList={data} />
		</div>
	);
}