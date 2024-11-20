import { useState } from "react";
import { LikesDialog } from "./components/LikesDialog";
import { PostCard } from "./components/PostCard";
import { mockPosts } from "./lib/mock-data";

export default function App() {
	const [posts, setPosts] = useState(mockPosts);
	const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

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

	const handleShowLikes = (postId: string) => {
		setSelectedPostId(postId);
	};

	const selectedPost = posts.find((post) => post.id === selectedPostId);

	return (
		<div className="w-full min-h-screen bg-white sm:bg-gray-100">
			<div className="max-w-lg mx-auto bg-white min-h-screen">
				<main className="pb-6 pt-6">
					{posts.map((post) => (
						<PostCard
							key={post.id}
							post={post}
							onLike={handleLike}
							onShowLikes={handleShowLikes}
						/>
					))}
				</main>

				{selectedPost && (
					<LikesDialog
						isOpen={!!selectedPostId}
						onClose={() => setSelectedPostId(null)}
						likedBy={selectedPost.likedBy}
					/>
				)}
			</div>
		</div>
	);
}
