import React from 'react';
import * as S from './select.style';
import { SelectProps } from './select.type';

export const Select: React.FC<SelectProps> = ({
	label,
	usage,
	options,
	...rest
}) => {
	return (
		<>
			{label && <span>{label}</span>}
			<S.StyledSelect usage={usage} {...rest}>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</S.StyledSelect>
			{/* {React.createElement("select",{className:"asd",...rest}, [<option key="1">test</option>,<option key="2">test2</option>])} */}
		</>
	);
};
