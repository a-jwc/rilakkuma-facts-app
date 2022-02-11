import Image from "next/image";

export const Header = () => {
	return (
		<header className="flex flex-col mx-auto justify-center pt-6 col-start-2 col-end-3">
			<>
				<div className="header-container mx-auto row-start-1 row-end-2 h-52 w-96 relative">
					<Image
						src="/images/relax-yellow.png"
						layout="fill"
						alt="relax bear"
						objectFit="cover"
						className="header-image"
					/>
				</div>
			</>
		</header>
	);
};
