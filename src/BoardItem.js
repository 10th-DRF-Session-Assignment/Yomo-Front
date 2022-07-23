const BoardItem = ({author, content, created_date, space, id}) => {
    return (
        <div className="BoardItem">
            <div className="info">
                <div>
                (<br/>유저의 사진<br/>자리입니다<br/>) <img/>
                </div>

                <br/>

                <span>
                     작성자 : {author} (로그인 기능 만든 후에 작성자와 연결되어야 할 것 같습니다) 
                     {/*| 게시판 위치 : {space} */}
                </span>
                <div>
                <button> 수정 </button>
                <span> / </span>
                <button> 삭제 </button>
                </div>
                <br/>
                <span className="date"> 작성 날짜 : {new Date(created_date).toLocaleDateString()} (시간도 출력해야되는데 일단 날짜만 넣었습니다.)</span>
            </div>
            <div className="content">내용 : {content}<br/><hr/></div>
        </div>
    );
};

export default BoardItem;