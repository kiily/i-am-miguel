import { Link } from '@remix-run/react';
import { Typewriter } from '../components/typewriter';
import { links as CursorLinks } from '../components/typewriter/cursor';
import styles from '~/styles/global.css';
import landingStyles from './landing.css';
import { useState } from 'react';

export function links() {
	return [
		...CursorLinks(),
		{ rel: 'stylesheet', href: landingStyles },
		{ rel: 'stylesheet', href: styles },
	];
}
export default function Index() {
	const [name, setName] = useState('miguel');

	const words = [
		'hi! i am',
		'hola! yo soy',
		'olá! eu sou o',
		'bonjour! je suis',
		'moien! ech sinn',
		'こんにちは! ',
	];

	const isJapanese = name.includes('ミ');

	return (
		<div className="page-wrapper">
			<div className="container">
				<div className="content-container">
					<h2 className={isJapanese ? 'jp' : ''}>
						<Typewriter
							onType={(count) => {
								const index = count % words.length;
								if (index + 1 === words.length) {
									setName('ミゲルです');
								} else {
									setName('miguel');
								}
							}}
							loop={100}
							cursor
							cursorColor="#403E3D"
							words={words}
						/>
					</h2>
				</div>
				<div className="content-container">
					<h1 className={isJapanese ? 'jp' : ''}>{name}</h1>
				</div>
			</div>
			<div>
				<p>Software developer, part-time writter</p>
			</div>
		</div>

		// <Link to="/posts">Blog</Link>
	);
}
