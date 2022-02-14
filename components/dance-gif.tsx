import Image from "next/image";

export const DanceGif = () => {
	return (
		<>
			<div className="header-container h-56 w-56 relative">
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
