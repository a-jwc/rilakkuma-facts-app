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
      const res = await fetch("http://localhost:8080/fact");
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

	return (
		<div className="text-center mx-auto h-auto p-16 text-2xl col-start-1 col-end-4 z-10">
			Fact: {fact}
		</div>
	);
};
