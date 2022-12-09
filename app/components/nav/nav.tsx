import { Link } from '@remix-run/react';
import styles from './nav.styles.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const Nav = () => {
	return (
		<nav className="top-nav">
			<Link to="/posts">Blog</Link>;
		</nav>
	);
};
