import React, { useRef, useState, useEffect } from 'react';
import BoardWrite from '../../BoardWrite.jsx';
import axios from 'axios';
import '../../App.css';

// API 받아오는 부분입니다
function BoardEdit() {
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
	const [newPost, setNewPost] = useState('');

    const apiUrl =  "dummy/data.json";

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

	return (
		<div className="BoardEditor">
			<span>게시물 작성</span>
			<form onSubmit={PostSubmit}>
				<input
					placeholder=" 어떤 생각을 하고 있나요? "
					value={newPost}
					onChange={e => setNewPost(e.target.value)}
				/>{' '}
				<button>완료</button>
				<button>cancel</button>
			</form>
		</div>
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