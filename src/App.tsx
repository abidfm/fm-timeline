import { useState } from "react";
import { PostCard } from "./components/PostCard";
import { mockPosts } from "./lib/mock-data";

export default function App() {
	const [posts, setPosts] = useState(mockPosts);

	const handleLike = (postId: string) => {
		setPosts(
			posts.map((post) => {
				if (post.id === postId) {
					return {
						...post,
						likes: post.isLiked ? post.likes - 1 : post.likes + 1,
						isLiked: !post.isLiked,
					};
				}
				return post;
			})
		);
	};

	return (
		<div className="w-full min-h-screen bg-white sm:bg-gray-100">
			<div className="max-w-lg mx-auto bg-white min-h-screen">
				<header className="sticky top-0 z-10 bg-white border-b border-gray-200">
					<div className="px-4 py-3 flex items-center"></div>
				</header>

				<main className="pb-16">
					{posts.map((post) => (
						<PostCard key={post.id} post={post} onLike={handleLike} />
					))}
				</main>
			</div>
		</div>
	);
}
