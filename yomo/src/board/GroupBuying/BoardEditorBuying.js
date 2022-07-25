import React, { useRef, useState, useEffect } from 'react';
import BoardWrite from '../../BoardWrite.jsx';
import axios from 'axios';
import { YellowBody } from '../../startpage/Login.js';
import styled from 'styled-components';

// API 받아오는 부분입니다
function BoardEdit() {
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
	const [newPost, setNewPost] = useState('');

	const apiUrl = 'dummy/data.json';

	useEffect(() => {
		getPosts();
	}, []);

	// 게시글 전체 불러오기
	const getPosts = async () => {
		const response = await axios
			.get(apiUrl)
			.then(response => {
				console.log('전체 글 불러오기 성공', response.data);
				setPosts([...response.data]);
			})
			.catch(error => {
				console.log('전체 글 불러오기 실패', error.message);
			});
	};

	// 게시글 작성하기

	const PostSubmit = e => {
		e.preventDefault();
		console.log(newPost);
		axios
			.post(apiUrl, {
				title: newPost,
				author: 1,
				content: newPost,
			})
			.then(response => {
				console.log('작성 성공', response);
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
	`;

	return (
		<YellowBody>
			<EditTitle>게시물 작성</EditTitle>
			<form onSubmit={PostSubmit}>
				<EditInput
					placeholder=" 어떤 생각을 하고 있나요? "
					value={newPost}
					onChange={e => setNewPost(e.target.value)}
				/>{' '}
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<EditBtn>완료</EditBtn>
					<EditBtn style={{ marginRight: '10%' }}>cancel</EditBtn>
				</div>
			</form>
		</YellowBody>
	);
}

// const BoardEditor = ({ onCreate }) => {
// 	const authorInput = useRef();
// 	const contentInput = useRef();

// 	const [state, setState] = useState({
// 		author: '',
// 		content: '',
// 		space: 1,
// 	});

// 	const handleChangeState = e => {
// 		setState({
// 			...state,
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	const handleSubmit = () => {
// 		if (state.author.length < 1) {
// 			authorInput.current.focus();
// 			return;
// 		}

// 		if (state.content.length < 5) {
// 			contentInput.current.focus();
// 			return;
// 		}

// 		onCreate(state.author, state.content, state.space);
// 		alert('글이 작성되었습니다.');
// 	};

// 	return (
// 		<div className="BoardEditor">
// 			<h2>게시물 작성</h2>
// 			<div>
// 				작성자
// 				<input
// 					ref={authorInput}
// 					name="author"
// 					type="text"
// 					value={state.author}
// 					onChange={handleChangeState}
// 				/>
// 			</div>
// 			<div>
// 				{' '}
// 				내용
// 				<textarea
// 					ref={contentInput}
// 					name="content"
// 					type="text"
// 					value={state.content}
// 					onChange={handleChangeState}
// 				/>
// 			</div>
// 			<div>
// 				{/* <select
//                 name="space"
//                 value={state.space}
//                 onChange={handleChangeState}
//             >
//                 <option value={1}>공구 게시판</option>
//                 <option value={2}>나눔 게시판</option>
//                 <option value={3}>친구 게시판</option>
//             </select> */}
// 			</div>
// 			<div>
// 				<button onClick={handleSubmit}>완료</button>
// 				<button onClick={handleSubmit}>Cancel</button>
// 			</div>
// 		</div>
// 	);
// };
export default BoardEdit;
