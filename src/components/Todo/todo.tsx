import * as S from './todo.style';
import { ButtonIcon } from '../atoms';
import { TodoProps } from '../TodoList/todolist.types';

export const Todo: React.FC<TodoProps> = ({
	id,
	text,
	state,
	timeStamp,
	deleteTodo,
	editTodo,
	complete,
}) => {
	return (
		<S.TodoRow>
			<S.TextContainer>
				<S.StyledCheckbox
					checked={state == 'Complete' ? true : false}
					type='checkbox'
					onChange={() => complete(id)}
				/>
				<S.TextContainer style={{ flexDirection: 'column' }}>
					<S.StyledSpan state={state}>{text}</S.StyledSpan>
					<S.StyledTimestamp>{timeStamp}</S.StyledTimestamp>
				</S.TextContainer>
			</S.TextContainer>
			<S.ButtonContainer>
				<ButtonIcon svgName='trash' onClick={() => deleteTodo(id)} />
				<ButtonIcon svgName='edit' onClick={() => editTodo(id)} />
			</S.ButtonContainer>
		</S.TodoRow>
	);
};
