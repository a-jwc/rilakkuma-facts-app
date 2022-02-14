import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Cloud } from "../components/cloud";
import { Clouds } from "../components/clouds";
import { Fact } from "../components/fact";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { DanceGif } from "../components/dance-gif";

const HappyValentinesDay: NextPage = () => {
	return (
		<div className="bg-pink h-screen bg-no-repeat bg-bottom font-varela bg-cover bg-origin-border overflow-x-hidden">
			<Head>
				<title>Rilakkuma Facts</title>
			</Head>
			<Clouds />
			<div className="container mx-auto h-auto lg:grid lg:grid-cols-3 gap-4 items-center">
				<div className="col-start-1">
					<Header />
				</div>
				<div className="header-container mx-auto row-start-1 row-end-2 relative col-start-2 col-end-4 z-10 self-start">
					<>
						<Image
							src="/images/rila-yellow-2-title-transparent.png"
							layout="responsive"
							width={576}
							height={208}
							alt="relax bear"
							objectFit="cover"
							className="header-image"
						/>
					</>
				</div>
				<div className="text-center text-4xl h-auto justify-self-center col-start-2 col-end-3 z-10 mt-10 bg-white/75 m-12 mx-auto p-16 tracking-wide relative">
					<p>Happy Valentine&apos;s Day Dani! 💝</p>
					<br />
					<p>From: Alex and Rilakkuma 👬</p>
				</div>
				<Footer />
				<div className="col-start-3 col-end-4 row-start-2 row-end-3 place-self-center m-12">
					<DanceGif />
				</div>
				<div className="col-start-1 col-end-2 row-start-2 row-end-3 place-self-center m-12">
					<DanceGif />
				</div>
			</div>
		</div>
	);
};

export default HappyValentinesDay;
