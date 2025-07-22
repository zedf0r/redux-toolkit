type TypeFetchParams = {
  url: string;
  method: string;
  body?: object;
};

export const fetchApi = ({ url, method, body }: TypeFetchParams) => {
  const options = {
    method,
    body: JSON.stringify(body),
  };

  return fetch(`http://www.omdbapi.com/?apikey=64405bd2&${url}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      if (response.status === 204) {
        return response;
      }

      return response.json();
    })
    .catch((error) => {
      throw new Error(`Ошибка: ${error}`);
    });
};
