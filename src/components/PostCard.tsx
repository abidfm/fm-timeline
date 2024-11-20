import type { Post } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import * as Avatar from "@radix-ui/react-avatar";
import { Heart } from "lucide-react";
import { AnimationCard } from "./AnimationCard";
import { ImageCard } from "./ImageCard";
interface PostCardProps {
	post: Post;
	onLike: (id: string) => void;
	onShowLikes?: (id: string) => void;
}

export function PostCard({ post, onLike, onShowLikes }: PostCardProps) {
	return (
		<article className="mx-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6 bg-blue-50">
			<div className="p-3 sm:p-4">
				<div className="flex items-start space-x-3">
					<Avatar.Root className="h-10 w-10 shrink-0 bg-white rounded-full overflow-hidden border-2 border-light-gray-500">
						<Avatar.Image
							alt={post.author.name}
							className="h-full w-full object-cover"
						/>
						<Avatar.Fallback className="h-full w-full  flex items-center justify-center text-[#004682]-500 font-bold ">
							{post.author.name[0]}
						</Avatar.Fallback>
					</Avatar.Root>

					<div className="flex-1 min-w-0">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-1 min-w-0">
								<span className="font-semibold truncate">
									{post.author.name}
								</span>
								<span className="text-gray-500 flex-shrink-0">·</span>
								<span className="text-gray-500 flex-shrink-0">
									{post.timestamp}
								</span>
							</div>
						</div>

						<p className="mt-2 text-gray-900 break-words">{post.content}</p>

						{/* Image */}
						{post.image && <ImageCard src={post.image} alt={post.content} />}

						{/* Animation */}
						{post.animation && <AnimationCard url={post.animation} text={""} />}

						<div className="mt-3 flex items-center space-x-2">
							<button
								onClick={() => onLike(post.id)}
								className="group flex items-center space-x-2 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
							>
								<Heart
									className={cn(
										"h-5 w-5 transition-colors",
										post.isLiked
											? "fill-red-500 text-red-500"
											: "text-gray-500 group-hover:text-red-500"
									)}
								/>
							</button>
							<button
								onClick={() => onShowLikes?.(post.id)}
								className={cn(
									"text-sm font-medium hover:underline",
									post.isLiked ? "text-red-500" : "text-gray-500"
								)}
							>
								{post.likes} {post.likes === 1 ? "like" : "likes"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
