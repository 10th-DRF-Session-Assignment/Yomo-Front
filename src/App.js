import "./App.css";
import BoardEditor from './BoardEditor';
import BoardList from "./BoardList";
import { useState, useRef } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content, space) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, 
      content, 
      space,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };


  return (
    <div className="App">
      <BoardEditor onCreate={onCreate} />
      <BoardList boardList={data}/>
    </div>
  );
};

export default App;