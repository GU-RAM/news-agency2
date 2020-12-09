async function createDataFetcher(fetchedData, setState) {
  const data = await fetchedData();
  setState(data);
}

export { createDataFetcher };
