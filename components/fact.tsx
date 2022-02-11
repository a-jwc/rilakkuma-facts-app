import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

interface Meta {
	page: String;
}

interface Data {
	data: [];
	meta: Meta;
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
      if (data !== undefined && data.data !== undefined) {
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
		<div className="text-center mx-auto h-auto p-16 text-2xl col-start-1 col-end-4">
			Fact: {fact}
		</div>
	);
};
