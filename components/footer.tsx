import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<>
			<div className="header-container mx-auto relative pb-16">
				<a
					href="http://www.san-x.jp/characters/rilakkuma.html"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/images/rila-yellow-2-transparent.png"
						layout="responsive"
						width={320}
						height={320}
						alt="icecream"
						objectFit="cover"
						className={`header-image`}
					/>
					1
				</a>
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
				<a
					href="https://www.youtube.com/watch?v=228KoorFs-Y&list=PL2nNLUYH9TlSssFkWQz_rK2f-S6Rblk2N"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/images/rila-yellow-transparent.png"
						layout="responsive"
						width={448}
						height={384}
						alt="icecream"
						objectFit="cover"
						className={`header-image`}
					/>
				</a>
			</div>
		</>
	);
};
