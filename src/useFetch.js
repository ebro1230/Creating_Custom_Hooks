import { useState, useEffect } from "react";

export default function useFetch(fetchAPI = "") {
  const [fetchResponse, setFetchResponse] = useState([]);

  const fetching = () => {
    console.log("fetching results");
    fetch(fetchAPI)
      .then((response) => {
        if (!response.ok) {
          alert("Error 1");
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setFetchResponse(json.hits);
      })
      .catch((error) => {
        alert(`Error 2: ${error}`);
      });
  };
  return { fetchResponse, fetching };
}
