import React, { useEffect } from "react";
import useToggle from "./useToggle";
import useFetch from "./useFetch";
import useWindowResize from "./useWindowResize";

const App = () => {
  const { value, toggle } = useToggle(true);
  const fetchAPI = "http://hn.algolia.com/api/v1/search?query=hello+world";
  const { fetchResponse, isLoading, fetching } = useFetch(fetchAPI);
  const { width, height, findScreenSize } = useWindowResize();
  const results = fetchResponse;
  let num = 1;
  useEffect(() => {
    findScreenSize();
  }, []);

  window.addEventListener("resize", () => {
    findScreenSize();
  });

  return (
    <div>
      <h1>Toggling Button</h1>
      <button onClick={toggle}>Toggle</button>
      {value === true ? <p>The toggle is on</p> : <p>The toggle is off</p>}
      <h1>Fetching Posts</h1>
      <button onClick={fetching}>Fetch</button>
      {isLoading ? (
        <div>Fetching Data...</div>
      ) : results.length ? (
        results.map((result) => (
          <div key={result.objectID}>
            {num++}. {result.title}
          </div>
        ))
      ) : (
        <div>Click Button to Fetch Results</div>
      )}
      <h1>Screen Size</h1>
      <p>
        {width} x {height}
      </p>
    </div>
  );
};

export default App;
