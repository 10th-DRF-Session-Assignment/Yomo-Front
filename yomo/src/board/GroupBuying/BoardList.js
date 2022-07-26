import BoardItem from './BoardItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API 연동하는 부분입니다
function BoardList() {
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});
	const [author, setAuthor] = useState([]);
	const [ID, setID] = useState({});

	const id = 124;

	useEffect(() => {
		getPosts();
		getAuthor();
		getID();
	}, []);

	// 게시글 전체 불러오기

	const getPosts = async () => {
		const response = await axios
			.get('https://dy6578.pythonanywhere.com/api/posts/')
			.then(response => {
				console.log('전체 글 불러오기 성공', response.data);
				setPosts([...response.data]);
			})
			.catch(error => {
				console.log('전체 글 불러오기 실패', error.message);
			});
	};

	//작성자 불러오기

	const getAuthor = async () => {
		const response = await axios
			.get('https://dy6578.pythonanywhere.com/api/posts/')
			.then(response => {
				console.log('작성자 불러오기 성공', response.data.author);
				setAuthor([...response.data.author]);
			})
			.catch(error => {
				console.log('작성자 불러오기 실패', error.message);
			});
	};

	const getID = async () => {
		const response = await axios
			.get('https://dy6578.pythonanywhere.com/api/posts/')
			.then(response => {
				console.log('전체 글 불러오기 성공', response.data.id);
				setID([...response.data.id]);
			})
			.catch(error => {
				console.log('전체 글 불러오기 실패', error.message);
			});
	};

	// // 게시글 수정하기 -> 삭제 뽀리기
	const Update = e => {
		e.preventDefault();
		const response = axios
			.put(`https://dy6578.pythonanywhere.com/api/posts/${id}/`, response.data)
			.then(response => {
				console.log('수정 성공', response.data);
				// setPosts([...response.data]);
			})
			.catch(error => {
				console.log('글 하나 불러오기 실패');
			});
	};

	// // // 게시글 수정하기 -> 삭제 뽀리기
	// const Update = async () => {
	// 	const response = await axios
	// 		.put(`https://dy6578.pythonanywhere.com/api/posts/${id}/`)
	// 		.then(response => {
	// 			console.log('수정 성공', response.data);
	// 			setPosts([...response.data]);
	// 		})
	// 		.catch(error => {
	// 			console.log('글 하나 불러오기 실패');
	// 		});
	// };

	// // // 게시글 수정하기 -> 작성하기 뽀리기
	// const PostSubmit = e => {
	// 	e.preventDefault();
	// 	axios
	// 		.post('https://dy6578.pythonanywhere.com/api/posts/', {
	// 			title: '제목',
	// 			author: 1,
	// 			content: newPost,
	// 		})
	// 		.then(response => {
	// 			getPosts();
	// 		})
	// 		.catch(error => {
	// 			console.log('작성 실패');
	// 		});
	// 	setNewPost('');
	// };

	// 게시글 삭제하기
	const onDelete = id => {
		axios
			.delete(`https://dy6578.pythonanywhere.com/api/posts/${id}`)
			.then(response => {
				console.log('삭제 성공', response);

				getPosts();
			})
			.catch(error => {
				console.log('삭제 실패', error);
			});
	};

	return (
		<div>
			{posts.map(post => {
				return (
					<p style={{ border: '1px solid red' }}>
						{post.content} {post.author} {post.id}{' '}
						<button onClick={() => onDelete(post.id)}>삭제</button>
						<button onClick={() => Update(post.id)}>수정</button>
					</p>
				);
			})}
		</div>
	);
}

export default BoardList;
