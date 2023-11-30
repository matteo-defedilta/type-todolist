import { useState, useId, useEffect } from 'react';
import * as S from './todo.style';
import { Button } from '../atoms';

type TodoProps = {
	id: string;
	text: string;
	state: 'Complete' | 'Incomplete';
};

type ModalProps = {
	onClose: () => void;
	onAdd: (todo: TodoProps) => void;
	onUpdate: (updatingTodo: TodoProps) => void;
	todoId: string;
	todos: Array<TodoProps>;
};

export const TodoModal: React.FC<ModalProps> = ({
	onClose,
	onAdd,
	onUpdate,
	todoId,
	todos,
}) => {
	const [text, setText] = useState('');
	const [state, setState] = useState<'Incomplete' | 'Complete'>('Incomplete');
	const [updatingTodo, setUpdatingTodo] = useState<TodoProps>();

	const id = useId();

	useEffect(() => {
		const newTodos = todos.filter((todo) => todo.id === todoId);

		if (newTodos.length > 0) {
			setUpdatingTodo(newTodos[0]);
			setText(newTodos[0].text);
		}
	}, [todoId, todos]);

	return (
		<S.ModalOverlay onClick={onClose}>
			<S.ModalContent onClick={(e) => e.stopPropagation()}>
				<S.StyledTitle label='ADD Todo' usage='secondary' />
				<S.StyledInput
					label='Insert Todo'
					usage='primary'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<S.StyledSelect
					label='Todo state'
					usage='primary'
					value={state}
					onChange={(e) =>
						setState(e.target.value as 'Incomplete' | 'Complete')
					}
					options={['Incomplete', 'Complete']}
				/>
				<Button
					usage='primary'
					label={todoId === '' ? 'Add' : 'Update'}
					onClick={() => {
						if (todoId === '') {
							onAdd({ id, text, state });
						} else {
							onUpdate({ id: updatingTodo?.id || '', text, state });
						}
					}}
				/>
				<Button usage='secondary' label='Cancel' onClick={onClose} />
			</S.ModalContent>
		</S.ModalOverlay>
	);
};
