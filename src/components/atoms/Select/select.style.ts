import styled from 'styled-components';

import { SelectProps } from './select.type';
type StyledDivProps = Omit<SelectProps, 'options'>;

export const StyledSelect = styled.select<StyledDivProps>`
	background-color: ${(props) =>
		props.usage == 'primary' ? '#fff' : '#cccdde'};
	border-radius: ${(props) => (props.usage == 'primary' ? 'unset' : '6px')};
	border: none;
	font-size: 1rem;
	padding: 0.8rem 0.2rem;
	width: 150px;
`;
