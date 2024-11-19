export interface Post {
	id: string;
	author: {
		name: string;
		username: string;
	};
	content: string;
	image?: string;
	likes: number;
	isLiked: boolean;
	timestamp: string;
}

export const mockPosts: Post[] = [
	{
		id: "5",
		author: {
			name: "Abid",
			username: "abid_driver",
		},
		content:
			"🎉 Abid completed a perfect trip with zero safety issues. Amazing job!",
		likes: 156,
		isLiked: false,
		timestamp: "1h ago",
	},
	{
		id: "6",
		author: {
			name: "Sachin",
			username: "sachin_driver",
		},
		content: "🌙 Sachin just finished a safe night drive. Keep it up!",
		likes: 98,
		isLiked: false,
		timestamp: "3h ago",
	},
	{
		id: "7",
		author: {
			name: "Tarek",
			username: "tarek_driver",
		},
		content:
			"🚛 Tarek completed an exceptionally long trip without any safety issues. Great work!",
		likes: 234,
		isLiked: false,
		timestamp: "5h ago",
	},
	{
		id: "8",
		author: {
			name: "Avi",
			username: "avi_driver",
		},
		content:
			"🔧 Avi reported an incident. Fairmatic is on it and taking good care of him.",
		likes: 45,
		isLiked: false,
		timestamp: "6h ago",
	},
	{
		id: "9",
		author: {
			name: "Nir",
			username: "nir_driver",
		},
		content:
			"🏆 Nir has climbed to 1st place in the Fleet ranking! Congratulations!",
		likes: 312,
		isLiked: false,
		timestamp: "8h ago",
	},
];
