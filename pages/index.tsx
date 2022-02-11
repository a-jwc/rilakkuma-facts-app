import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Cloud } from "../components/cloud";
import { Fact } from "../components/fact";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Side } from "../components/side";

const cloudYPosition = {
	"default": "",
	"one": "top-4",
  "two": "top-36",
  "three": "top-60",
  "four": "top-96"
};

const cloudXPosition = {
	"default": "",
	"one": "-left-20",
  "two": "-left-28",
  "three": "-left-36",
  "four": "-left-64"
};

const Home: NextPage = () => {
	return (
		<div className="bg-blue h-screen bg-no-repeat font-varela bg-cover overflow-x-hidden">
			<Head>
				<title>Rilakkuma Facts</title>
			</Head>
			<div className="container mx-auto h-auto lg:grid lg:grid-cols-3 gap-4 items-center">
				<Cloud yPosition={cloudYPosition["one"]} xPosition={cloudXPosition["one"]} />
				<Cloud yPosition={cloudYPosition["two"]} xPosition={cloudXPosition["two"]} />
        <Cloud yPosition={cloudYPosition["three"]} xPosition={cloudXPosition["three"]} />
        <Cloud yPosition={cloudYPosition["four"]} xPosition={cloudXPosition["four"]} />

				<Header />
				<div className="text-center text-2xl col-start-2 col-end-3 z-10 ">
					Rilakkuma Facts!
				</div>
				<Fact />
				<Footer />
				<div className="col-start-3 col-end-4 row-start-1 row-end-2 place-self-center">
					<Side />
				</div>
				<div className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center">
					<Side />
				</div>
			</div>
		</div>
	);
};

export default Home;
