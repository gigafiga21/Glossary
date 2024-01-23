const fs = require("fs/promises");
const path = require("path");

(async () => {
	const plainData = JSON.parse(
		await fs.readFile(path.resolve(__dirname, "../data/temp.json"), "utf8"),
	);
	const graphData = plainData.reduce(
		(acc, item) => ({
			nodes: [...acc.nodes, { id: item.id, label: item.therm }],
			edges: [
				...acc.edges,
				...item.relations.map((r) => ({
					from: item.id,
					to: r.to,
					label: r.name,
				})),
			],
		}),
		{ nodes: [], edges: [] },
	);

	await fs.writeFile(
		path.resolve(__dirname, "../public/data/temp.plain.json"),
		JSON.stringify(plainData),
	);
	await fs.writeFile(
		path.resolve(__dirname, "../public/data/temp.graph.json"),
		JSON.stringify(graphData),
	);
})();
