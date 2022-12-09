import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { Copy } from './copy';

const ICONS_MAP = {
	copy: Copy,
};

export type IconNames = keyof typeof ICONS_MAP;

type IconProps = {
	icon: IconNames;
	color?: string;
	size?: number;
	className?: string;
	label?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
};

export const Icon: React.FC<IconProps> = ({
	icon,
	size,
	color,
	label,
	className,
	style,
	onClick,
}) => {
	const IconComponent = ICONS_MAP[icon] as React.FC<
		React.SVGProps<SVGSVGElement>
	>;
	const dimensions = size
		? {
				width: `${size}`,
				height: `${size}`,
		  }
		: {};
	return (
		<AccessibleIcon.Root label={label || icon}>
			<IconComponent
				{...dimensions}
				style={{
					color: color || 'inherit',
					cursor: onClick ? 'pointer' : 'inherit',
					...style,
				}}
				className={className}
				onClick={onClick}
			/>
		</AccessibleIcon.Root>
	);
};
