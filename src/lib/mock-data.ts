export interface Post {
	id: string;
	author: {
		name: string;
		username: string;
		avatar: string;
	};
	content: string;
	image?: string;
	likes: number;
	isLiked: boolean;
	timestamp: string;
}

export const mockPosts: Post[] = [
	{
		id: "1",
		author: {
			name: "Bryan",
			username: "bryan",
			avatar:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
		},
		content: "Bryan completed a perfect trip!",
		image:
			"https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
		likes: 110,
		isLiked: false,
		timestamp: "2h ago",
	},
	{
		id: "2",
		author: {
			name: "Sarah",
			username: "sarah_codes",
			avatar:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
		},
		content: "Just deployed my first React app! 🚀",
		likes: 89,
		isLiked: false,
		timestamp: "4h ago",
	},
	{
		id: "3",
		author: {
			name: "Alex",
			username: "alex_dev",
			avatar:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
		},
		content: "Beautiful sunset at the beach today! 🌅",
		image:
			"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
		likes: 234,
		isLiked: false,
		timestamp: "6h ago",
	},
	{
		id: "4",
		author: {
			name: "John",
			username: "john_doe",
			avatar: "",
		},
		content: "I'm learning to code!",
		image: "",
		likes: 0,
		isLiked: false,
		timestamp: "8h ago",
	},
];
