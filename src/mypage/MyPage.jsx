import React from 'react';
import styled from 'styled-components';
import userImg from '../image 12.svg';
import MyPageList from './MyPageList';

export const MyPageDiv = styled.div`
	margin: auto;
`;

export const MyPageTitle = styled.div`
	margin: 2% 13% 0;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 28pt;
	line-height: 44pt;
	text-align: left;
	color: #000000;
`;

export const MyPageUserInfoDiv = styled.div`
	position: relative;
`;

export const SchoolButton = styled.div`
	display: block;
	box-sizing: border-box;
	width: 200px;
	height: 40px;
	border-radius: 50px;
	text-align: center;
	background-color: #ff7272;
	padding: 9px;
	font-size: 18pt;
	color: #ffffff;
	margin: 0% 1% 0 75%;
`;

export const UserImg = styled.div`
	margin: 2% 2% 5% 13%;
	width: 50px;
	height: 50px;
`;

export const UserName = styled.div`
	position: absolute;
	top: 5px;
	left: 280px;
	/* margin-left: 10%; */
	font-size: 20px;
	line-height: 24px;

	/* identical to box height */

	text-align: center;

	color: #000000;
`;

export const School = styled.span`
	position: absolute;
	height: 25px;
	left: 280px;
	top: 35px;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	/* identical to box height */

	text-align: center;

	color: #000000;
`;

export const MyLog = styled.div`
	position: absolute;
	width: 269px;
	height: 41px;
	left: 134px;
	top: 476px;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 44px;
	text-align: center;

	color: #000000;
`;

export const MyPageLogDiv = styled.div`
	margin: auto;
	font-size: 36px;

	color: #000000;
`;

export const BlockLine = styled.div`
	margin: auto;
	width: 75%;
	border: 1px solid #000000;
`;

const MyPage = () => {
	return (
		<MyPageDiv>
			<MyPageTitle>내 정보</MyPageTitle>
			<BlockLine />
			<MyPageUserInfoDiv>
				<UserImg>
					<img src={userImg} />
				</UserImg>
				<UserName>사용자1</UserName>
				<School>oo여대 ㅁㅁ기숙사</School>
				<SchoolButton>학교인증</SchoolButton>
			</MyPageUserInfoDiv>
			<BlockLine style={{ marginTop: '2%' }} />
			<MyPageTitle style={{ marginBottom: '2%' }}> 내가 작성한 글</MyPageTitle>
			<MyPageLogDiv>
				<MyPageList style={{ marginLeft: '300px' }} />
			</MyPageLogDiv>
		</MyPageDiv>
	);
};

export default MyPage;
