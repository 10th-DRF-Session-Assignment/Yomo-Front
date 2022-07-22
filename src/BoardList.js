import BoardItem from "./BoardItem";
import App from "./App.css";

const BoardList = ({boardList}) => {
    console.log(boardList);
    return (
        <div className='BoardList'>
            <h2>기숙사 공구 게시판</h2>
            {/* <h4>글이 {boardList.length}개 있습니다.</h4> */}
            <div className="BoardBlock">
                {boardList.map((it) => (
                    <BoardItem key={it.id} {...it}/>
                ))}
            </div>
        </div>
    );
};

BoardList.defaultProps = {
    boardList: [],
};

export default BoardList;