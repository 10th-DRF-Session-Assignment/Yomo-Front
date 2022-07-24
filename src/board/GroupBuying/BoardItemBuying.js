import styled from "styled-components"
import userImg from "../../userImg.png"

export const WriteItem = styled.div`
position: relative;
width: 1142px;
left: 147px;
top: 100px;
border : 1px solid black;
`;

export const UserInfoDiv = styled.div`
`;

export const UserImg = styled.span`
position: relative;
width: 50px;
height: 50px;
left: 46px;
top: 36px;
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
`;

export const TextContent = styled.div`
position: relative;
width: 900px;
left : 5px;
top: 27px;
font-size: 20px;
line-height: 24px;
color: #000000;
margin : 40px;
`;

const BoardItem = ({author, content, created_date, space, id}) => {
    return (
        <WriteItem>
            <UserInfoDiv>
                <UserImg><img src={userImg}/></UserImg>  
                <UserName>{author}</UserName>
                <UserTime>{new Date(created_date).toLocaleDateString()}</UserTime>
            </UserInfoDiv>
            <TextContent>{content}</TextContent>
        </WriteItem>
    );
};

export default BoardItem;