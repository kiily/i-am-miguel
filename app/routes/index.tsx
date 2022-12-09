import { Typewriter } from '../components/typewriter';
import { links as CursorLinks } from '../components/typewriter/cursor';
import { links as NavLinks } from '../components/nav/nav';
import styles from '~/styles/global.css';
import landingStyles from '~/styles/landing.css';
import { useState } from 'react';
import { SocialMediaShareButtons } from '~/components/social-media/social-media-button';
import { Nav } from '~/components/nav/nav';

export function links() {
	return [
		...CursorLinks(),
		...NavLinks(),
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
		'こんにちは! ',
	];

	const isJapanese = name.includes('ミ');

	return (
		<>
			<Nav />
			<main className="page-wrapper">
				<div className="container">
					<div className="content-container">
						<h2
							className={isJapanese ? 'jp' : ''}
							style={{
								minHeight: '100px',
							}}
						>
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
					<p>Software developer, part-time writer</p>
				</div>
				<div className="footer">
					<SocialMediaShareButtons />
				</div>
			</main>
		</>
	);
}
