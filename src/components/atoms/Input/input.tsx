import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<StyledInputProps>`
	background-color: ${(props) =>
		props.usage == 'primary' ? '#fff' : '#cccdde'};
	border: 2px solid black;
	font-size: 1rem;
	padding: 0.8rem 0.2rem;
	width: 150px;
`;

type InputProps = React.ComponentPropsWithoutRef<'select'> & {
	label?: string;
	usage: 'primary' | 'secondary';
};

type StyledInputProps = Omit<InputProps, 'options'>;

export const Input: React.FC<InputProps> = ({ label, usage, ...rest }) => {
	return (
		<>
			{label && <span>{label}</span>}
			<StyledInput type='text' usage={usage} {...rest} />
		</>
	);
};
