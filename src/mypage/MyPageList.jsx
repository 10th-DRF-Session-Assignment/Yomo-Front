import React from 'react';
import dummy from '../dummy/data.json';
import styled from 'styled-components';
import userImg from '../image 12.svg';

export const UserImg = styled.span`
	position: relative;
	left: 40px;
	top: 32px;
	width: 50px;
	height: 50px;
	background-color: #ffffff;
`;

export const WriteItem = styled.div`
	margin: 10px auto;
	position: relative;
	width: 1142px;
	border: 1px solid black;
	background-color: #ffffff;
`;

export const UserInfoDiv = styled.div`
	background-color: #ffffff;
`;

export const UserName = styled.div`
	position: absolute;
	height: 25px;
	left: 100px;
	top: 31px;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
	color: #000000;
	background-color: #ffffff;
`;

export const UserTime = styled.div`
	position: absolute;
	width: 117px;
	height: 25px;
	left: 90px;
	top: 62px;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: #000000;

	background-color: #ffffff;
`;

export const TextContent = styled.div`
	position: relative;
	width: 900px;
	left: 5px;
	top: 27px;
	font-size: 20px;
	line-height: 24px;
	color: #000000;
	margin: 40px;

	background-color: #ffffff;
`;

const MyPageList = created_date => {
	console.log(dummy);
	const author = 1;
	const dataList = dummy.datas.filter(data => data.author === author);
	console.log(dataList);

	return (
		<>
			<div className="list_data">
				{dataList.map(data => (
					<div key={data.id}>
						<WriteItem>
							<UserInfoDiv>
								<UserImg>
									<img src={userImg} />
								</UserImg>
								<UserName>사용자{data.author}</UserName>
								<UserTime>
									{new Date(created_date).toLocaleDateString()}
								</UserTime>
							</UserInfoDiv>
							<TextContent>{data.content}</TextContent>
						</WriteItem>
					</div>
				))}
			</div>
		</>
	);
};

export default MyPageList;
