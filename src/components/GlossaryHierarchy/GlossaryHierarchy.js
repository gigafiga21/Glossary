import React, { useRef, useState, useEffect } from "react";
import { DataSet } from "vis-data";
import { Network } from "vis-network";
import "./GlossaryHierarchy.css";

const VIS_NODE_COLORS = { border: "#000", background: "#fff" };

export default function GlossaryHierarchy({ data }) {
	const hierarchyContainerRef = useRef();
	const [visNetwork, setVisNetwork] = useState(null);

	const visData = {
		nodes: new DataSet(data.nodes),
		edges: new DataSet(data.edges),
	};

	useEffect(() => {
		const hierarchyContainerElement = hierarchyContainerRef.current;
		if (hierarchyContainerRef.current) {
			setVisNetwork(
				new Network(hierarchyContainerElement, visData, {
					nodes: {
						shape: "box",
						shapeProperties: { borderRadius: 0 },
						color: { ...VIS_NODE_COLORS, highlight: VIS_NODE_COLORS },
					},
					edges: { color: "#000" },
				}),
			);
		}

		return () => {
			visNetwork?.destroy();
		};
	}, []);

	return <div className="GlossaryHierarchy" ref={hierarchyContainerRef} />;
}
