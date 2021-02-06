function handleResponse(response) {
  return response.text().then((text) => {
    if (!response.ok) {
      const error = response.statusText;
      throw error;
    }

    return text;
  });
}

module.exports = {
  handleResponse,
};
