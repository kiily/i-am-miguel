import React from 'react';
import styles from './cursor.styles.css';

export type CursorProps = {
	cursorStyle?: string;
	cursorColor?: string;
};

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const Cursor = React.forwardRef<HTMLSpanElement, CursorProps>(
	({ cursorStyle = '|', ...props }, ref) => {
		return (
			<span {...props} ref={ref} data-cursor>
				{cursorStyle}
			</span>
		);
	}
);
Cursor.displayName = 'Cursor';
