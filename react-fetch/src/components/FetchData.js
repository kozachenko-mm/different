import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(`https://jsonplaceholder.typicode.com/posts`);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {isError && <div>Somesing went wrong ...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h5>{item.title}</h5>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FetchData;
