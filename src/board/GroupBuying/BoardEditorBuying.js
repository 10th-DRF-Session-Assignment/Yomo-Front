import {useRef, useState} from "react";
import BoardWrite from "../../BoardWrite.jsx";

const BoardEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author:"", 
        content:"",
        space: 1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();
            return;
        }  

        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.space);
        alert("글이 작성되었습니다.")
    }

    return(
        <div className = "BoardEditor">
        <h2>게시물 작성</h2>
        <div>작성자
            <input
                ref={authorInput}
                name="author" 
                type="text"
                value={state.author} 
                onChange={handleChangeState}
            />
        </div>
        <div> 내용
            <textarea
                ref={contentInput}
                name="content"
                type="text"
                value={state.content} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            {/* <select 
                name="space" 
                value={state.space}
                onChange={handleChangeState}
            >           
                <option value={1}>공구 게시판</option>
                <option value={2}>나눔 게시판</option>
                <option value={3}>친구 게시판</option>
            </select> */}
        </div>
        <div>
            <button onClick={handleSubmit}>완료</button> 
            <button onClick={handleSubmit}>Cancel</button>
        </div>
    </div>
    );
};
export default BoardEditor;