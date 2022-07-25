import React from 'react';
import styled from 'styled-components';
import userImg from "./userImg.png";

export const MyPageDiv = styled.div`
    width: 1142px;
    margin-right : auto;
    margin-left : auto;
`;

export const MyPageTitle = styled.div`
    font-size: 36px;
    margin : 10px;
`;

export const MyPageUserInfoDiv = styled.div`
`;

export const UserImg = styled.div`
    margin-top : 39px;
    margin-bottom : 79px;
    width : 50px;
    height : 50px;
`;

export const UserName = styled.span`
`;

export const School = styled.span`
`;

export const MyLog = styled.div`
    margin-top : 64px;
    font-size: 36px;
`;

const MyPage = () => {
    return (
        <MyPageDiv>
            <MyPageTitle>내 정보</MyPageTitle>
            <hr/>
            <MyPageUserInfoDiv>
                <UserImg><img src={userImg}/></UserImg>  
                <UserName>사용자</UserName>
                <School>oo여대 ㅁㅁ기숙사</School>
            </MyPageUserInfoDiv>
            <hr/>
            <MyLog>내가 작성한 글</MyLog>
        </MyPageDiv>
    );
};

export default MyPage;