import styled from 'styled-components';
import { Todo } from './../Todo/todo';

const TodosList = styled.div`
	background-color: #ecedf6;
	padding: 1.25rem;
	/* padding-bottom: 0.25rem; */
`;

type TodoProps = {
	id: string;
	text: string;
	state: 'Complete' | 'Incomplete';
	timeStamp: string;
};

type TodosProp = {
	todos: Array<TodoProps>;
	deleteTodo: () => void;
	editTodo: () => void;
	complete: () => void;
	select: string;
};

export const Todos: React.FC<TodosProp> = ({
	todos,
	deleteTodo,
	editTodo,
	complete,
	select,
}) => {
	return (
		<TodosList>
			{todos.length > 0 ? (
				todos
					.filter((todo) => {
						if (select === 'all') {
							return todos;
						}
						return todo.state === select;
					})
					.map((todo) => (
						<Todo
							key={todo.id}
							{...todo}
							editTodo={editTodo}
							deleteTodo={deleteTodo}
							complete={complete}
						/>
					))
			) : (
				<span>No todo's Yet</span>
			)}
		</TodosList>
	);
};
