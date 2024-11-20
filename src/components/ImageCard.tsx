interface ImageCardProps {
	src: string;
	alt?: string;
}

export function ImageCard({ src, alt = "Post content" }: ImageCardProps) {
	return (
		<div className="relative mt-3 -mx-3 sm:mx-0 sm:rounded-2xl overflow-hidden">
			<div className="aspect-w-16 aspect-h-9">
				<img
					src={src}
					alt={alt}
					className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
					loading="lazy"
				/>
			</div>
		</div>
	);
}
