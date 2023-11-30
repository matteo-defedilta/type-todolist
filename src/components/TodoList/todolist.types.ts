export type TodoProps = {
	id: string;
	text: string;
	state: 'Complete' | 'Incomplete';
	deleteTodo: (text: string) => void;
	complete: (text: string) => void;
	editTodo: (text: string) => void;
};
