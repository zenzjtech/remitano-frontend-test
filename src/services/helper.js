function handleResponse(response) {
  return response.text().then((text) => {
    if (!response.ok) {
      const error = response.statusText;
      throw error;
    }

    const result = JSON.parse(text);
    if (result.pageInfo.totalResults === 0) throw new Error('No movie with this id')
    return result;
  });
}

module.exports = {
  handleResponse,
};
