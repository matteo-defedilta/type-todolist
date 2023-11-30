import { Input, Select, Title } from '../atoms';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	background: white;
	padding: 20px;
	background-color: #ecedf6;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-wrap: wrap;
`;

// Styled version of the Select component
export const StyledSelect = styled(Select)`
	border: none;
	margin-bottom: 1rem;
	width: 100%;
	padding: 1rem;
`;

// Styled version of the Input component
export const StyledInput = styled(Input)`
	border: none;
	margin-bottom: 1rem;
	width: 100%;
	padding: 1rem;
`;

// Styled version of the Title component
export const StyledTitle = styled(Title)`
	width: 100%;
	text-align: left;
	margin: 0;
	margin-bottom: 1rem;
`;
