import type { Post } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import * as Avatar from "@radix-ui/react-avatar";
import { Heart } from "lucide-react";

interface PostCardProps {
	post: Post;
	onLike: (id: string) => void;
}

export function PostCard({ post, onLike }: PostCardProps) {
	return (
		<article className="border-b border-gray-200">
			<div className="p-3 sm:p-4">
				<div className="flex items-start space-x-3">
					<Avatar.Root className="h-10 w-10 shrink-0 rounded-full overflow-hidden">
						<Avatar.Image
							alt={post.author.name}
							className="h-full w-full object-cover"
						/>
						<Avatar.Fallback className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
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

						{post.image && (
							<div className="mt-3 -mx-3 sm:mx-0 sm:rounded-2xl overflow-hidden">
								<img
									src={post.image}
									alt="Post content"
									className="w-full h-auto object-cover"
									loading="lazy"
								/>
							</div>
						)}

						<div className="mt-3 flex items-center space-x-2">
							<button
								onClick={() => onLike(post.id)}
								className="group flex items-center space-x-1 touch-manipulation"
							>
								<Heart
									className={cn(
										"h-5 w-5 transition-colors",
										post.isLiked
											? "fill-blue-500 text-blue-500"
											: "text-gray-500 group-hover:text-blue-500"
									)}
								/>
								<span
									className={cn(
										"text-sm",
										post.isLiked
											? "text-blue-500"
											: "text-gray-500 group-hover:text-blue-500"
									)}
								>
									{post.likes}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
