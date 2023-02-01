import React from "react";
import useToggle from "./useToggle";
import useFetch from "./useFetch";

const App = () => {
  const { value, toggle } = useToggle(true);
  const fetchAPI = "http://hn.algolia.com/api/v1/search?query=hello+world";
  const { fetchResponse, fetching } = useFetch(fetchAPI);
  const results = fetchResponse;
  let num = 1;

  return (
    <div>
      <h1>Toggling Button</h1>
      <button onClick={toggle}>Toggle</button>
      {value === true ? <p>The toggle is on</p> : <p>The toggle is off</p>}
      <h1>Fetching Posts</h1>
      <button onClick={fetching}>Fetch</button>
      {results.length ? (
        results.map((result) => (
          <div key={result.objectID}>
            {num++}. {result.title}
          </div>
        ))
      ) : (
        <div>Click Button to Fetch Results</div>
      )}
    </div>
  );
};

export default App;
