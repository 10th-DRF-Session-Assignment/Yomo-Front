import './App.css';
import BoardEditor from './board/GroupBuying/BoardEditorBuying';
import BoardList from './board/GroupBuying/BoardList';
import { useState, useRef } from 'react';

const BoardWrite = () => {
	const [data, setData] = useState([]);

	const dataId = useRef(0);

	const onCreate = (author, content, space) => {
		const created_date = new Date().getTime();
		const newItem = {
			author,
			content,
			space,
			created_date,
			id: dataId.current,
		};
		dataId.current += 1;
		setData([newItem, ...data]);
	};

	return (
		<div>
			<BoardEditor onCreate={onCreate} />
			<BoardList boardList={data} />
		</div>
	);
};

export default BoardWrite;
