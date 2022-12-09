import {
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';
import { Icon } from '../icon/icon';
import { useCopyToClipboard } from '../use-copy-to-clipboard';

export type SocialMediaShareButtonsProps = {
	title?: string;
};

const shareWindowSize = {
	windowHeight: 600,
	windowWidth: 1000,
};

export const SocialMediaShareButtons = ({
	title,
}: SocialMediaShareButtonsProps) => {
	const [, copyToClipboard] = useCopyToClipboard();

	return (
		<div
			style={{
				display: 'flex',
				gap: '10px',
			}}
		>
			<TwitterShareButton
				url={'https://twitter.com/kiily95'}
				title={title}
				{...shareWindowSize}
			>
				<TwitterIcon round />
			</TwitterShareButton>
			<LinkedinShareButton
				url={
					'https://www.linkedin.com/in/%F0%9F%90%89-miguel-marin-vermelho-09805185/'
				}
				title={title}
				{...shareWindowSize}
			>
				<LinkedinIcon round />
			</LinkedinShareButton>

			{/* <button
				style={{
					outline: 'none',
					borderRadius: '16px',
					height: '40px',
				}}
				onClick={() =>
					copyToClipboard(`${title ? title + ': ' : ''} ${'https://flown.com'}`)
				}
			>
				<Icon icon="copy" />
			</button> */}
		</div>
	);
};
