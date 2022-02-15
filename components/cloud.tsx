import { useSpring, animated, useSprings, useTransition } from "react-spring";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Prop {
	yPosition: String;
	xPosition: String;
}

interface Size {
	width: number;
	height: number;
}

function useWindowSize(): Size {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState<Size>({
		width: 0,
		height: 0,
	});
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		// Add event listener
		window.addEventListener("resize", handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}

function getRandomNumber() {
	return Math.floor(Math.random() * (40000 - 20000) + 20000);
}

export const Cloud = ({ yPosition, xPosition }: Prop) => {
	const size = useWindowSize();

	const x = xPosition.split("-");
	let intX = 0;
	if (x.length == 3) {
		intX = parseInt(x[2]);
	} else {
		intX = parseInt(x[1]);
	}

	const props = useSpring({
		from: { x: -intX * 4 },
		to: { x: size.width + intX * 4 },
		loop: true,
		config: { duration: getRandomNumber() },
	});
  console.log(size)
	// console.log(`xPosition: ${xPosition} yPosition: ${yPosition}`);

	return (
		<>
			<animated.div
				className={`cloud absolute ${xPosition} ${yPosition}`}
				style={props}
			>
				<Image
					src="/images/cloud.png"
					width={200}
					height={200}
					alt="cloud"
					objectFit="cover"
					className="header-image"
				/>
			</animated.div>
		</>
	);
};
