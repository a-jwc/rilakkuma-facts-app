import Image from "next/image";

// Attribution
// Link: https://tenor.com/view/rilakkuma-dancing-happy-gif-8096245

export const DanceGif = () => {
	return (
		<>
			<div className="header-container h-72 w-72 relative">
				<Image
					src="/images/rilakkuma-dancing.gif"
					layout="fill"
					alt="relax bear"
					objectFit="cover"
					className="header-image"
				/>
			</div>
		</>
	);
};
