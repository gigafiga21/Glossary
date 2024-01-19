export default async function loadGlossaryData(glossaryDataType, glossaryDataName) {
    const response = await fetch(`/data/${glossaryDataName}.${glossaryDataType}.json`);

    return response.json();
}

