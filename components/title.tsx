import Image from "next/image";

// Attribution
// Link: https://i.imgur.com/88tWi.jpg

export const Title = () => {
	return (
		// <div className="header-container mx-auto row-start-1 row-end-2 relative col-start-2 col-end-4 z-10 self-start">
		// 	<>
		// 		<Image
					// src="/images/rila-yellow-2-title-transparent.png"
		// 			src="/images/rila-big-face-title.pn
		// 			width={448}
		// 			height={128}
		// 			alt="relax bear"
		// 			objectFit="cover"
		// 			className="header-image"
		// 		/>
		// 	</>
		// </div>
		<div className="header-container mx-auto row-start-1 row-end-2 relative col-start-2 col-end-4 z-10 self-start top-12">
			<>
				<Image
					src="/images/rila-big-face-title-clean.png"
					layout="responsive"
					width={384}
					height={72}
					alt="relax bear"
					objectFit="cover"
					className="header-image"
				/>
			</>
		</div>
	);
};
