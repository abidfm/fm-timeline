export interface Post {
	id: string;
	author: {
		name: string;
		username: string;
	};
	content: string;
	animation?: string;
	image?: string;
	likes: number;
	isLiked: boolean;
	timestamp: string;
	likedBy: {
		name: string;
		username: string;
		avatar?: string;
	}[];
}

export const mockPosts: Post[] = [
	{
		id: "1",
		author: {
			name: "Abid",
			username: "abid_driver",
		},
		content:
			"🎉 Abid completed a perfect trip with zero safety issues. Amazing job!",
		likes: 156,
		isLiked: false,
		timestamp: "1h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
			{
				name: "Michael Rodriguez",
				username: "mike_r",
			},
		],
	},
	{
		id: "2",
		author: {
			name: "Sachin",
			username: "sachin_driver",
		},
		content: "🌙 Sachin just finished a safe night drive. Keep it up!",
		animation:
			"https://s3-alpha-sig.figma.com/img/0b84/33ad/0682d990d724b38400907f97119ce163?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PQ0tdo73q91C4zaHcd1HWIxfvwYwaLWFiDA~lZYiSi3XJ48JqRie-LIbd6KkrZqwRzAcURAgSDS20alCuJPMBl9Tsmb6Ka4Win2S7gLcYHuYMAml5x~uxMqXVq87WXWg-Q4DSLyCuahTVUjD0A0~xKQ1cTPVB3OOSmAko835~xmZBaC8QrQriT11AcApxfTUQzMJv526O1u~2~j3V-WaB1Elwgp5yKGBOR~7hqKL1ANEt7nzTEfAhcTN1grb0ZD4ymyBs-TE6BZAxqnUThuPo2TX7Fb4FXOEarnB7Pv7ROPxjRd-zOeRfvz9dMWXP0WlMT5tau9lzNaWVpBGnJMy3w__",
		likes: 98,
		isLiked: false,
		timestamp: "3h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
		],
	},
	{
		id: "3",
		author: {
			name: "Tarek",
			username: "tarek_driver",
		},
		content:
			"🚛 Tarek completed an exceptionally long trip without any safety issues. Great work!",
		likes: 234,
		animation:
			"https://s3-alpha-sig.figma.com/img/35b2/f83e/6b5c4b21f7e1204d46cca5e834ef72ea?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxnToLoYU1via4mHHw9Cq0y3glMI8uuVL4VPPVuM7B~qDtghz-n2j~c~HhX4Z4vPSzgd6CajiM1Dd3vAT8Zfmc1MSFHgKrh7XqchOcxuEq2gUEFCzTnZ7RDIGScxfemoXVcPQykFIU~gZ5Rz-wIgp-XxvrnV80aKXnsV0VKCFcuE2D22WaPWxBok2bRGcEZ6OhuUuU-F7wfsXgwUsC4V4egGIn4xRpuP0WpoXCAxqWlUn3SDR2c~A1fu-h4nAmA4Vzj~w2j7WS0jfgsWhXIJAM9NxECDb~IU5MmnsEHeEwDX2HjnVVOgmsUKhkIZpuVHzQ0snNd3TwfqAFnksxpVqA__",
		isLiked: false,
		timestamp: "5h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
		],
	},
	{
		id: "4",
		author: {
			name: "Avi",
			username: "avi_driver",
		},
		content:
			"🔧 Avi reported an incident. Fairmatic is on it and taking good care of him.",
		likes: 45,
		isLiked: false,
		timestamp: "6h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
		],
	},
	{
		id: "5",
		author: {
			name: "Nir",
			username: "nir_driver",
		},
		content:
			"🏆 Nir has climbed to 1st place in the Fleet ranking! Congratulations!",
		likes: 312,
		isLiked: false,
		animation:
			"https://s3-alpha-sig.figma.com/img/a963/0141/5c878c86b1f555c4187ae8a5345a3c4a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q1nBFvA8cqRH2v9GBOXzgTbOlUgFrlmjnf4v~2jNjMlcqTjjtcPpYmy529o8lxX2HI8fr63nRajJqMrmpiyI~0m~fqzexj3EMrLPPdb4w8fukqOWlgVZ1J6f81kJhKvMi0iVZFu2lHXQN7qxCd-XAblVtgQBwRy9UcVoqPCCj3QMwEecP6sCbxyPUBccqoZG6Pxq5QGxkfIele5iq6ZoCDX5EQujhlLa8u9ZIBOq8spT-iG5ekPKV1ScZG8Njrv5oPKfhpursQ2k6P26VxjV0SQTnsIpriaBddDfHotOxLnz5FYHhS9FPlU7~UujYnyStLcU-wmF-4NiDypTAqKb0Q__",
		timestamp: "8h ago",
		likedBy: [],
	},
	{
		id: "1",
		author: {
			name: "Abid",
			username: "abid_driver",
		},
		content:
			"🎉 Abid completed a perfect trip with zero safety issues. Amazing job!",
		likes: 156,
		isLiked: false,
		timestamp: "1h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
			{
				name: "Michael Rodriguez",
				username: "mike_r",
			},
		],
	},
	{
		id: "2",
		author: {
			name: "Sachin",
			username: "sachin_driver",
		},
		content: "🌙 Sachin just finished a safe night drive. Keep it up!",
		animation:
			"https://s3-alpha-sig.figma.com/img/0b84/33ad/0682d990d724b38400907f97119ce163?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PQ0tdo73q91C4zaHcd1HWIxfvwYwaLWFiDA~lZYiSi3XJ48JqRie-LIbd6KkrZqwRzAcURAgSDS20alCuJPMBl9Tsmb6Ka4Win2S7gLcYHuYMAml5x~uxMqXVq87WXWg-Q4DSLyCuahTVUjD0A0~xKQ1cTPVB3OOSmAko835~xmZBaC8QrQriT11AcApxfTUQzMJv526O1u~2~j3V-WaB1Elwgp5yKGBOR~7hqKL1ANEt7nzTEfAhcTN1grb0ZD4ymyBs-TE6BZAxqnUThuPo2TX7Fb4FXOEarnB7Pv7ROPxjRd-zOeRfvz9dMWXP0WlMT5tau9lzNaWVpBGnJMy3w__",
		likes: 98,
		isLiked: false,
		timestamp: "3h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
		],
	},
	{
		id: "3",
		author: {
			name: "Tarek",
			username: "tarek_driver",
		},
		content:
			"🚛 Tarek completed an exceptionally long trip without any safety issues. Great work!",
		likes: 234,
		animation:
			"https://s3-alpha-sig.figma.com/img/35b2/f83e/6b5c4b21f7e1204d46cca5e834ef72ea?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxnToLoYU1via4mHHw9Cq0y3glMI8uuVL4VPPVuM7B~qDtghz-n2j~c~HhX4Z4vPSzgd6CajiM1Dd3vAT8Zfmc1MSFHgKrh7XqchOcxuEq2gUEFCzTnZ7RDIGScxfemoXVcPQykFIU~gZ5Rz-wIgp-XxvrnV80aKXnsV0VKCFcuE2D22WaPWxBok2bRGcEZ6OhuUuU-F7wfsXgwUsC4V4egGIn4xRpuP0WpoXCAxqWlUn3SDR2c~A1fu-h4nAmA4Vzj~w2j7WS0jfgsWhXIJAM9NxECDb~IU5MmnsEHeEwDX2HjnVVOgmsUKhkIZpuVHzQ0snNd3TwfqAFnksxpVqA__",
		isLiked: false,
		timestamp: "5h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
		],
	},
	{
		id: "4",
		author: {
			name: "Avi",
			username: "avi_driver",
		},
		content:
			"🔧 Avi reported an incident. Fairmatic is on it and taking good care of him.",
		likes: 45,

		isLiked: false,
		timestamp: "6h ago",
		likedBy: [
			{
				name: "Sarah Chen",
				username: "sarah_chen",
			},
		],
	},
	{
		id: "5",
		author: {
			name: "Nir",
			username: "nir_driver",
		},
		content:
			"🏆 Nir has climbed to 1st place in the Fleet ranking! Congratulations!",
		likes: 312,
		isLiked: false,
		animation:
			"https://s3-alpha-sig.figma.com/img/a963/0141/5c878c86b1f555c4187ae8a5345a3c4a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q1nBFvA8cqRH2v9GBOXzgTbOlUgFrlmjnf4v~2jNjMlcqTjjtcPpYmy529o8lxX2HI8fr63nRajJqMrmpiyI~0m~fqzexj3EMrLPPdb4w8fukqOWlgVZ1J6f81kJhKvMi0iVZFu2lHXQN7qxCd-XAblVtgQBwRy9UcVoqPCCj3QMwEecP6sCbxyPUBccqoZG6Pxq5QGxkfIele5iq6ZoCDX5EQujhlLa8u9ZIBOq8spT-iG5ekPKV1ScZG8Njrv5oPKfhpursQ2k6P26VxjV0SQTnsIpriaBddDfHotOxLnz5FYHhS9FPlU7~UujYnyStLcU-wmF-4NiDypTAqKb0Q__",
		timestamp: "8h ago",
		likedBy: [],
	},
];
