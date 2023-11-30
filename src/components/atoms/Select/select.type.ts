export type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
	label?: string;
	usage: 'primary' | 'secondary';
	options: Array<string>;
};
