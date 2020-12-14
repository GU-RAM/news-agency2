async function createDataFetcher(fetchedData, setState) {
  const data = await fetchedData();
  console.log('createDataFetcher -> data', data);
  setState(data);
}

export { createDataFetcher };
