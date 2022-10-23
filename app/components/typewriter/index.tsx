import { Cursor } from './cursor';
import type { TypewriterProps } from './useTypewriter';
import { useTypewriter } from './useTypewriter';

interface ComponentProps extends TypewriterProps {
	/** Show / Hide the cursor */
	cursor?: boolean;
	/** Change the cursor style available if cursor is enabled */
	cursorStyle?: string;
	/** Change the cursor Color */
	cursorColor?: string;
}
/**
 * https://www.npmjs.com/package/react-simple-typewriter
 */
export const Typewriter = ({
	words = ['Hello World!', 'This is', 'a simple Typewriter'],
	loop = 1,
	typeSpeed = 80,
	deleteSpeed = 50,
	delaySpeed = 1500,
	cursor = false,
	cursorStyle = '|',
	cursorColor = 'inherit',
	onLoopDone,
	onType,
}: ComponentProps): JSX.Element => {
	const [text] = useTypewriter({
		words,
		loop,
		typeSpeed,
		deleteSpeed,
		delaySpeed,
		onLoopDone,
		onType,
	});

	return (
		<>
			<span style={{ color: cursorColor }}>{text}</span>
			{cursor && <Cursor cursorStyle={cursorStyle} cursorColor={cursorColor} />}
		</>
	);
};
