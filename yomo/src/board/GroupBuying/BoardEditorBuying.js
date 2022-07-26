import React, { useRef, useState, useEffect } from 'react';
import BoardWrite from '../../BoardWrite.jsx';
import axios from 'axios';
import { YellowBody } from '../../startpage/Login.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// API 받아오는 부분입니다
function BoardEdit() {
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
	const [newPost, setNewPost] = useState('');

	// const apiUrl = 'dummy/data.json';

	useEffect(() => {
		getPosts();
	}, []);

	// 게시글 전체 불러오기
	const getPosts = async () => {
		const response = await axios
			.get('https://dy6578.pythonanywhere.com/api/posts/')
			.then(response => {
				console.log('전체 글 불러오기 성공');
				setPosts([response.data]);
			})
			.catch(error => {
				console.log('전체 글 불러오기 실패', error.message);
			});
	};

	// 게시글 작성하기

	const PostSubmit = e => {
		e.preventDefault();
		axios
			.post('https://dy6578.pythonanywhere.com/api/posts/', {
				title: '제목',
				author: 1,
				content: newPost,
			})
			.then(response => {
				getPosts();
			})
			.catch(error => {
				console.log('작성 실패');
			});
		setNewPost('');
	};

	const EditInput = styled.input`
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		box-sizing: border-box;
		display: block;
		margin: auto;
		width: 80%;
		min-height: 308px;
		height: auto;
		font-size: 18pt;
		padding-bottom: 250px;
		padding-left: 50px;
		padding-right: 50px;
		background: #ffffff;
		border: 1px solid #000000;
	`;

	const EditTitle = styled.div`
		display: block;
		font-size: 30pt;
		/* line-height: 61px; */
		margin: 5% 10% 1%;
	`;

	const EditBtn = styled.button`
		display: block;
		box-sizing: border-box;
		width: 168px;
		height: 70px;
		border-radius: 50px;
		text-align: center;
		background-color: #ff7272;
		padding: auto;
		font-size: 18pt;
		color: #ffffff;
		margin: 1%;
		border: 0;
		text-decoration: none;
	`;

	return (
		<YellowBody>
			<EditTitle>게시물 작성</EditTitle>
			<form onSubmit={PostSubmit}>
				<EditInput
					placeholder="어떤 생각을 하고 있나요? "
					value={newPost}
					onChange={e => setNewPost(e.target.value)}
				/>
				<EditBtn>완료</EditBtn>
				<Link to="/groupbuying" style={{ textDecoration: 'none' }}>
					<EditBtn style={{ marginRight: '10%' }}>cancel</EditBtn>
				</Link>
			</form>
		</YellowBody>
	);
}

export default BoardEdit;
