import React, { useEffect, useState } from "react";
import axios from "axios";

const Heros = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await axios.get("http://localhost:5500/data");
        if (response.statusText.toLowerCase() === "ok") {
          setIsLoading(false);
          setData(response.data);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setError(error.message);
      }
    };
    fetchJsonData();
  }, []);

  if (isError) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
        {!isLoading && (
          <ol>
            {data.map((d) => (
              <li key={d.id}>{d.name} </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Heros;
