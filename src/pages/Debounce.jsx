import { useState, useEffect } from "react";

const Debounce = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(query);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debounceQuery) {
      console.log(`Triggering an api call : ${debounceQuery}`);
      alert(`Triggering an api call : ${debounceQuery}`);
    }
  }, [debounceQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Debounce;
