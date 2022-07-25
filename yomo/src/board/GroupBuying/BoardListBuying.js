import BoardItem from './BoardItemBuying';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API 연동하는 부분입니다
function BoardListPost() {
	const [posts, setPosts] = useState([]);
	const [singlePost, setSinglePost] = useState({});

	const id = 36;

	useEffect(() => {
		getPosts();
		getSinglePost();
	}, []);

	// 게시글 전체 불러오기

	const getPosts = async () => {
		const response = await axios
			.get('http://127.0.0.1:8000/b_pj_app/users/post/')
			.then(response => {
				console.log('전체 글 불러오기 성공', response.data);
				setPosts([...response.data]);
			})
			.catch(error => {
				console.log('전체 글 불러오기 실패', error.message);
			});
	};

	// 개별 게시글 불러오기
	// 저희 단계에서 필요 없으면 삭제해도 될 듯 합니다
	const getSinglePost = async () => {
		const response = await axios
			.get(`http://127.0.0.1:8000/b_pj_app/users/post/${id}/`)
			.then(response => {
				console.log('글 하나 불러오기 성공', response.data);
				setSinglePost(response.data);
			})
			.catch(error => {
				console.log('글 하나 불러오기 실패');
			});
	};

	// 게시글 수정하기
	const Update = async () => {
		const response = await axios
			.put(`http://127.0.0.1:8000/b_pj_app/users/post/${id}/`)
			.then(response => {
				console.log('수정 성공', response.data);
				setPosts([...response.data]);
			})
			.catch(error => {
				console.log('글 하나 불러오기 실패');
			});
	};

	// 게시글 삭제하기
	const onDelete = id => {
		axios
			.delete(`http://127.0.0.1:8000/b_pj_app/users/post/${id}/`)
			.then(response => {
				console.log('삭제 성공', response);

				getPosts();
			})
			.catch(error => {
				console.log('삭제 실패', error);
			});
	};

	const BoardList = ({ boardList }) => {
		console.log(boardList);
		return (
			<div>
				{posts.map(post => {
					return (
						<p>
							{post.content}
							<button onClick={() => onDelete(post.id)}>삭제</button>
						</p>
					);
				})}
			</div>

			// <div className="BoardList">
			// 	{/* <h4>글이 {boardList.length}개 있습니다.</h4> */}
			// 	<div className="BoardBlock">
			// 		{boardList.map(it => (
			// 			<BoardItem key={it.id} {...it} />
			// 		))}
			// 	</div>
			// </div>
		);
	};

	BoardList.defaultProps = {
		boardList: [],
	};
}

export default BoardListPost;
