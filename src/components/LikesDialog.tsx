import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface LikesDialogProps {
	isOpen: boolean;
	onClose: () => void;
	likedBy: {
		name: string;
		username: string;
		avatar?: string;
	}[];
}

export function LikesDialog({ isOpen, onClose, likedBy }: LikesDialogProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="bg-white max-w-sm">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold">Liked by</DialogTitle>
				</DialogHeader>
				<div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
					{likedBy.map((user) => (
						<div key={user.username} className="flex items-center space-x-3">
							<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium">
								{user.name[0]}
							</div>
							<div className="flex-1 min-w-0">
								<p className="font-medium truncate">{user.name}</p>
								<p className="text-sm text-gray-500 truncate">
									@{user.username}
								</p>
							</div>
						</div>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
}
