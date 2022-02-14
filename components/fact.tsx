import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

interface Meta {
	page: string;
}

interface Data {
	data: InnerData[];
	meta: Meta;
}

interface InnerData {
	id: string;
	fact: string;
}

export const Fact = () => {
	const [fact, setFact] = useState("");

	const getData = async () => {
		try {
			const res = await fetch("https://rilakkuma-facts-api.herokuapp.com/fact");
			if (!res.ok) {
				throw Error("res not ok");
			}
			const data: Data = await res.json();
			if (data !== undefined && data.data[0] !== undefined) {
				setFact(data.data[0].fact);
			}
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, [setFact]);

	function getNewFact(): void {
		getData();
	}

	return (
		<div className="text-center col-start-1 col-end-4 z-10 mx-auto relative">
			<div className="text-center mx-auto h-auto p-16 text-2xl bg-white/50 m-12 z-10">
				Fact: {fact}
			</div>
			<button
				onClick={() => getNewFact()}
				className="text-white my-2 w-36 bg-yellow-600
            mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold
            hover:cursor-pointe hover:bg-yellow-400 z-10"
			>
				New Fact
			</button>
		</div>
	);
};
