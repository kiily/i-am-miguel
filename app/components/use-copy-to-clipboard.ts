import { useCallback, useState } from 'react';

type ClipboardCopyReturn = [boolean, (text: string) => void];

export const useCopyToClipboard = (): ClipboardCopyReturn => {
	const [hasCopied, setHasCopied] = useState(false);

	const copyToClipboard = useCallback((text: string) => {
		try {
			void navigator.clipboard.writeText(text);
			setHasCopied(true);
			/**
			 * Revert the hasCopied after 5seconds
			 */
			setTimeout(() => {
				setHasCopied(false);
			}, 5000);
		} catch (error) {}
	}, []);

	return [hasCopied, copyToClipboard];
};
