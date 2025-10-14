import React, { useState } from "react";

const Home = () => {
  const [form, setForm] = useState({
    name: "",
  });
  let renderCount = 0;

  const handleFomrChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting form`);
  };
  renderCount++;
  return (
    <div>
      Home <br />
      Render count :{renderCount} <br />
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleFomrChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
