import * as S from './todoList.style';
import { Button, Select, Title } from '../atoms';
import { Todos, TodoModal } from '../../components';
import { useTodoList } from './useTodoList';

export const TodoList = () => {
	const {
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
	} = useTodoList();

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
