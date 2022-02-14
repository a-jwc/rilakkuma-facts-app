import Image from "next/image";

export const Footer = () => {
	return (
		<>
			<div className="header-container mx-auto h-96 w-96 relative">
				<Image
					src="/images/rila-icecream-transparent.png"
          layout="fill"
					alt="icecream"
					objectFit="cover"
					className={`header-image`}
				/>
			</div>
		</>
	);
};
