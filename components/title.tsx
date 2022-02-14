import Image from "next/image";

export const Title = () => {
	return (
		<div className="header-container mx-auto row-start-1 row-end-2 relative col-start-2 col-end-4 z-10 self-start">
			<>
				<Image
					src="/images/rila-yellow-2-title-transparent.png"
					layout="responsive"
					width={448}
					height={128}
					alt="relax bear"
					objectFit="cover"
					className="header-image"
				/>
			</>
		</div>
	);
};
