import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<>
			<div className="header-container mx-auto relative pb-16">
				<Image
					src="/images/rila-yellow-2-transparent.png"
          layout="responsive"
          width={320}
          height={320}
					alt="icecream"
					objectFit="cover"
					className={`header-image`}
				/>
			</div>
			<div className="header-container mx-auto relative pb-16">
				<Link href="/happy-valentines-day">
					<a>
						<Image
							src="/images/rila-icecream-transparent.png"
              layout="responsive"
              width={320}
              height={320}
							alt="icecream"
							objectFit="cover"
							className={`header-image`}
						/>
					</a>
				</Link>
			</div>
			<div className="header-container mx-auto relative pb-16">
				<Image
					src="/images/rila-yellow-transparent.png"
					layout="responsive"
          width={448}
          height={384}
					alt="icecream"
					objectFit="cover"
					className={`header-image`}
				/>
			</div>
		</>
	);
};
