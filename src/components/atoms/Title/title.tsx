import styled from 'styled-components';

const PrimaryTitle = styled.h1`
	color: #646681;
	display: inline-block;
	font-weight: 700;
	margin: 2rem auto 1.5rem;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
`;
const SecondaryTitle = styled.h2`
	color: #646681;
	display: inline-block;
	font-weight: 700;
	margin: 2rem auto 1.5rem;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
`;

type TitleProps = React.ComponentPropsWithoutRef<'h1' | 'h2'> & {
	label: string;
	usage: 'primary' | 'secondary';
};

export const Title: React.FC<TitleProps> = ({ label, usage, ...rest }) => {
	return (
		<>
			{usage === 'primary' ? (
				<PrimaryTitle className='title-primary' {...rest}>
					{label}
				</PrimaryTitle>
			) : (
				<SecondaryTitle className='title-secondary' {...rest}>
					{label}
				</SecondaryTitle>
			)}
		</>
	);
};
