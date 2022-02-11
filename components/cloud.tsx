import { useSpring, animated } from "react-spring";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Prop {
	yPosition: String;
	xPosition: String;
}

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	function handleResize() {
		// Set window width/height to state
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== "undefined") {
			// Handler to call on window resize

			// Add event listener
			window.addEventListener("resize", handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}

function getRandomNumber() {
	return Math.floor(Math.random() * (30000 - 15000) + 15000);
}

export const Cloud = ({ yPosition, xPosition }: Prop) => {
	const size = useWindowSize();

	const x = xPosition.split("-");

	const props = useSpring({
		from: { x: 0 },
		to: { x: size.width + parseInt(x[2]) * 4 },
		loop: true,
		config: { duration: getRandomNumber() },
	});

	return (
		<>
			<animated.div
				className={`absolute ${xPosition} ${yPosition}`}
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
