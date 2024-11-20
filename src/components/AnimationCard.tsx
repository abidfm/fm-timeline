import { FC } from "react";

interface AnimationCardProps {
	url?: string;
	text: string;
}

export const AnimationCard: FC<AnimationCardProps> = ({ url, text }) => {
	return (
		<div className="flex flex-col mt-4 rounded-lg items-center ">
			{url && (
				<img
					src={url}
					alt="animation"
					className="w-full h-full  object-contain"
				/>
			)}
			<p className="text-center">{text}</p>
		</div>
	);
};

export default AnimationCard;
