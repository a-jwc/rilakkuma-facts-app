import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<>
			<div className="header-container mx-auto h-96 w-96 relative">
				<Image
					src="/images/rila-yellow-2-transparent.png"
					layout="fill"
					alt="icecream"
					objectFit="cover"
					className={`header-image`}
				/>
			</div>
			<div className="header-container mx-auto h-96 w-96 relative">
				<Link href="/happy-valentines-day">
					<a>
						<Image
							src="/images/rila-icecream-transparent.png"
							layout="fill"
							alt="icecream"
							objectFit="cover"
							className={`header-image`}
						/>
					</a>
				</Link>
			</div>
			<div className="header-container mx-auto h-96 w-112 relative w-">
				<Image
					src="/images/rila-yellow-transparent.png"
					layout="fill"
					alt="icecream"
					objectFit="cover"
					className={`header-image`}
				/>
			</div>
		</>
	);
};
