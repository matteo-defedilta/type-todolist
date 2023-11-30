import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select<StyledDivProps>`
	background-color: ${(props) =>
		props.usage == 'primary' ? '#fff' : '#cccdde'};
	border-radius: ${(props) => (props.usage == 'primary' ? 'unset' : '6px')};
	border: 2px solid black;
	font-size: 1rem;
	padding: 0.8rem 0.2rem;
	width: 150px;
`;

type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
	label?: string;
	usage: 'primary' | 'secondary';
	options: Array<string>;
};

type StyledDivProps = Omit<SelectProps, 'options'>;

export const Select: React.FC<SelectProps> = ({
	label,
	usage,
	options,
	...rest
}) => {
	return (
		<>
			{label && <span>{label}</span>}
			<StyledSelect usage={usage} {...rest}>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</StyledSelect>
			{/* {React.createElement("select",{className:"asd",...rest}, [<option key="1">test</option>,<option key="2">test2</option>])} */}
		</>
	);
};
