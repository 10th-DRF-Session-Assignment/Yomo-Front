import React from 'react';
import styled from 'styled-components';
import userImg from "./userImg.png";
import MyPageList from './MyPageList';
import './App.css';

export const MyPageDiv = styled.div`
    width: 1142px;
    margin-right : auto;
    margin-left : auto;
`;

export const MyPageTitle = styled.div`
position: absolute;
width: 217px;
height: 41px;
left: 105px;
top: 188px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 44px;
text-align: center;

color: #000000;
`;

export const MyPageUserInfoDiv = styled.div`
`;


export const SchoolButton = styled.div`
position: absolute;
width: 220px;
height: 46px;
left: 1001px;
top: 348px;


font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
text-align: center;

color: #FFFFFF;

background: #FF7272;
border-radius: 50px;

padding
`;

export const UserImg = styled.div`
position: absolute;
width: 50px;
height: 50px;
left: 159px;
top: 283px;

`;

export const UserName = styled.div`
position: absolute;
height: 25px;
left: 220px;
top: 283px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height */

text-align: center;

color: #000000;
`;

export const School = styled.span`
position: absolute;
height: 25px;
left: 220px;
top: 308px;

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
position: absolute;
left: 10px;
top: 476px;
font-size: 36px;

color: #000000;

`;

export const BlockLine = styled.div`
position: absolute;
width: 1136px;
height: 0px;
left: 150px;
top: 244px;

border: 1px solid #000000;
`;

export const BlockLine2 = styled.div`
position: absolute;
width: 1136px;
left: 150px;
top: 410px;

border: 1px solid #000000;
`;

const MyPage = () => {
    return (
        <MyPageDiv>
            <MyPageTitle>내 정보</MyPageTitle>
            <MyPageUserInfoDiv>
            <BlockLine/>
                <UserImg><img src={userImg}/></UserImg>  
                <UserName>사용자1</UserName>
                <School>oo여대 ㅁㅁ기숙사</School>
                <SchoolButton>학교인증</SchoolButton>
            <BlockLine2/>
            </MyPageUserInfoDiv>
            <MyLog>내가 작성한 글</MyLog>
            <MyPageLogDiv>
            <MyPageList/>
            </MyPageLogDiv>
        </MyPageDiv>
    );
};

export default MyPage;