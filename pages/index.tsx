import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Cloud } from "../components/cloud";
import { Clouds } from "../components/clouds";
import { Fact } from "../components/fact";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { DanceGif } from "../components/dance-gif";

const Home: NextPage = () => {
	return (
		<div className="bg-blue h-screen bg-no-repeat bg-bottom font-varela bg-cover bg-origin-border overflow-x-hidden">
			<Head>
				<title>Rilakkuma Facts</title>
			</Head>
			<Clouds />
			<div className="container mx-auto h-auto lg:grid lg:grid-cols-3 gap-4 items-center">
				<div className="col-start-1">
					<Header />
				</div>
				{/* <div className="text-center text-7xl col-start-2 col-end-4 z-10 ">
					Rilakkuma Facts!
				</div> */}
				<>
					<div className="header-container mx-auto row-start-1 row-end-2 h-52 w-144 relative col-start-2 col-end-4 z-10 self-start">
						<Image
							src="/images/rila-yellow-2-title-transparent.png"
							layout="fill"
							alt="relax bear"
							objectFit="cover"
							className="header-image"
						/>
					</div>
				</>
				<Fact />
				{/* <Footer /> */}
				<div className="col-start-3 col-end-4 row-start-3 row-end-4 place-self-center m-12">
					<DanceGif />
				</div>
				<div className="col-start-1 col-end-2 row-start-3 row-end-4 place-self-center">
					<DanceGif />
				</div>
			</div>
		</div>
	);
};

export default Home;
