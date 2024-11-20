import { FC } from "react";

interface AnimationCardProps {
	url?: string;
	text: string;
}

export const AnimationCard: FC<AnimationCardProps> = ({ url, text }) => {
	return (
		<div className="flex flex-col items-center gap-4 p-4">
			{url && (
				<div className="w-24 h-24 flex items-center justify-center">
					<img
						src={url}
						alt="animation"
						className="w-full h-full object-contain"
					/>
				</div>
			)}
			<p className="text-center">{text}</p>
		</div>
	);
};

export default AnimationCard;
