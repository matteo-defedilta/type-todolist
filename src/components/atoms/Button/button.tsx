import React from 'react';
import './style.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
	label: string;
	usage: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ label, usage, ...rest }) => {
	return (
		<button className={`btn button-${usage}`} {...rest}>
			{label}
		</button>
	);
};
