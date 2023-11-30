import { useState } from 'react';
import { TodoProps } from './todolist.types';

export const useTodoList = () => {
	const [todos, setTodos] = useState<Array<TodoProps>>([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [select, setSelect] = useState('all');
	const [editedTodo, setEditedTodo] = useState('');

	const handleOpenModal = () => {
		setModalOpen(!modalOpen);
	};

	const handleSetTodo = (todo: TodoProps) => {
		setTodos((todos) => [...todos, todo]);
		handleOpenModal();
	};

	const handleDeleteTodo = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEditTodo = (id: string) => {
		setEditedTodo(id);
		handleOpenModal();
	};

	const handleUpdate = (todoUpdate: TodoProps) => {
		const updatedTodos: TodoProps[] = todos.map((todo) => {
			if (todo.id === todoUpdate.id) {
				return {
					...todo,
					text: todoUpdate.text,
					state: todoUpdate.state,
					timeStamp: todoUpdate.timeStamp,
				};
			}
			return todo;
		});

		setTodos(updatedTodos);
		setEditedTodo('');
		handleOpenModal();
	};

	const handleComplete = (id: string) => {
		const updatedTodos: TodoProps[] = todos.map((todo) => {
			if (todo.id === id) {
				if (todo.state == 'Complete') {
					return { ...todo, state: 'Incomplete' };
				} else {
					return { ...todo, state: 'Complete' };
				}
			}
			return todo;
		});

		// Aggiorna lo stato globale dei todos con i nuovi todos modificati
		setTodos(updatedTodos);
	};
	return {
		todos,
		modalOpen,
		select,
		editedTodo,
		setSelect,
		handleOpenModal,
		handleSetTodo,
		handleDeleteTodo,
		handleEditTodo,
		handleUpdate,
		handleComplete,
	};
};
