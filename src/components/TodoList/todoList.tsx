import { useState } from 'react';
import * as S from './todoList.style';
import { TodoProps } from './todolist.types';
import { Button, Select, Title } from '../atoms';
import { Todos, TodoModal } from '../../components';

export const TodoList = () => {
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
				return { ...todo, text: todoUpdate.text, state: todoUpdate.state };
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

	return (
		<S.TodoListContainer>
			{modalOpen && (
				<TodoModal
					todoId={editedTodo}
					todos={todos}
					onClose={handleOpenModal}
					onAdd={handleSetTodo}
					onUpdate={handleUpdate}
				/>
			)}
			<Title label='Todo List Primary' usage='primary' />

			<S.ButtonContainer>
				<Button
					label='Add task'
					usage='primary'
					onClick={() => handleOpenModal()}
				/>
				<Select
					options={['all', 'Complete', 'Incomplete']}
					usage='secondary'
					onChange={(e) => setSelect(e.target.value)}
				/>
			</S.ButtonContainer>

			<Todos
				editTodo={handleEditTodo}
				deleteTodo={handleDeleteTodo}
				complete={handleComplete}
				select={select}
				todos={todos}
			/>
		</S.TodoListContainer>
	);
};
