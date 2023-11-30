import React from 'react';
//import { Cancel, Edit, Trash } from '../../../assets/svgs';
import { svgComponents } from '../../../assets/svgs';
import './style.css';

type ButtonIconProps = React.ComponentPropsWithoutRef<'button'> & {
	svgName: keyof typeof svgComponents;
};

export const ButtonIcon: React.FC<ButtonIconProps> = ({ svgName, ...rest }) => {
	const SvgComponent = svgComponents[svgName];

	return (
		<button className='btn-icon' {...rest}>
			<SvgComponent />
		</button>
	);
};
