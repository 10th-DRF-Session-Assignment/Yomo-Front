import BoardItem from "./BoardItemBuying";

const BoardList = ({boardList}) => { 
    console.log(boardList);
    return (
        <div className='BoardList'>
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