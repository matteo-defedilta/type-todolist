import styled from 'styled-components';

export const TodoRow = styled.div`
	align-items: center;
	background-color: #fff;
	border-radius: 5px;
	display: flex;
	padding: 0.8rem;
	margin-bottom: 1rem;
	justify-content: space-between;
`;

export const ButtonContainer = styled.div`
	display: flex;
	button {
		margin: 0 0.2rem;
	}
`;

export const TextContainer = styled.div`
	display: flex;
`;

export const StyledCheckbox = styled.input`
	width: 2rem;
	accent-color: #646ff0;
`;

export const StyledSpan = styled.span`
	font-weight: 500;
	text-decoration: ${(props) => props.state == 'Complete' && 'line-through'};
	color: ${(props) => props.state == 'Complete' && '#585858'};
`;
