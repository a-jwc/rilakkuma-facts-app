import { Cloud } from "./cloud";

const xPosition = [20, 36, 52, 60, 72, 96];
const yPosition = [4, ...xPosition, 96];

const cloudYPosition = {
	one: "top-4",
	two: "top-36",
	three: "top-60",
	four: "top-96",
};

const cloudXPosition = {
	one: "-left-20",
	two: "-left-36",
	three: "-left-64",
	four: "-left-96",
};

function getRandomNumber(arr: number[]) {
	// console.log(Math.floor(Math.random() * (arr.length - 1)))
	return Math.floor(Math.random() * (arr.length - 1));
}

export const Clouds = () => {
	return (
		<div>
			<Cloud
				yPosition={`top-${yPosition[getRandomNumber(yPosition)]}`}
				xPosition={`-left-${xPosition[getRandomNumber(xPosition)]}`}
			/>
			<Cloud
				yPosition={cloudYPosition["one"]}
				xPosition={`-left-${xPosition[getRandomNumber(xPosition)]}`}
			/>
			<Cloud
				yPosition={cloudYPosition["two"]}
				xPosition={`left-144`}
			/>
			<Cloud
				yPosition={`top-${yPosition[getRandomNumber(yPosition)]}`}
				xPosition={`-left-${xPosition[getRandomNumber(xPosition)]}`}
			/>
			<Cloud
				yPosition={cloudYPosition["three"]}
				xPosition={`left-96`}
			/>
			<Cloud
				yPosition={cloudYPosition["four"]}
				xPosition={`-left-${xPosition[getRandomNumber(xPosition)]}`}
			/>
			<Cloud
				yPosition={`top-${yPosition[getRandomNumber(yPosition)]}`}
				xPosition={`left-48`}
			/>
			<Cloud
				yPosition={`top-${yPosition[getRandomNumber(yPosition)]}`}
				xPosition={`left-192`}
			/>
		</div>
	);
};
