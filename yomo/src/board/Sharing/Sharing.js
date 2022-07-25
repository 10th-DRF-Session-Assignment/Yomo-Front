import React, { Component, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BoardList from '../GroupBuying/BoardListBuying.js';
import BoardEditor from '../GroupBuying/BoardEditorBuying.js';

export default function Sharing() {
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
			<div>
				<h1>기숙사 나눔 게시판</h1>
				<span>
					<Link to="write">글쓰기</Link>
				</span>
				<BoardEditor onCreate={onCreate} />
				<BoardList boardList={data} />
			</div>
		</div>
	);
}
