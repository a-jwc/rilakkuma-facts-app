import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="flex flex-col mx-auto justify-center pt-6 col-start-2 col-end-3 z-10">
			<>
				<div className="header-container mx-auto row-start-1 row-end-2 h-52 w-96 relative">
					<Link href="/">
						<a>
							<Image
								src="/images/relax-yellow.png"
								layout="fill"
								alt="relax bear"
								objectFit="cover"
								className="header-image"
							/>
						</a>
					</Link>
				</div>
			</>
			{/* <div className="text-center text-4xl col-start-2 col-end-3 z-10 ">
				Rilakkuma Facts!
			</div> */}
		</header>
	);
};
