import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axiosUtils";
import { useState } from "react";

const RQHeros = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    id: "",
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  // ---------------- SUCCESS / ERROR HANDLERS ----------------
  const onSuccess = (data) => {
    console.log("✅ Data fetched successfully:", data);
  };

  const onError = (error) => {
    console.error("Error fetching data:", error);
  };

  // ---------------- FETCH HEROS (READ) ----------------
  const fetchData = () => {
    //  return axios.get("http://localhost:5500/heros");
    return request({ url: "/heros" });
  };

  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    "fetch-heros",
    fetchData,
    {
      select: (res) => res.data, // only keep .data
      onSuccess,
      onError,
    }
  );

  // ---------------- ADD HEROS (CREATE) ----------------
  const addNewData = async () => {
    const count = (data?.length || 0) + 1;
    const payload = {
      id: `${count}`,
      name: form.name,
      username: form.username,
      phone: form.phone,
      email: form.email,
    };
    // return axios.post("http://localhost:5500/heros", payload);
    return request({ url: "/heros", method: "POST", data: payload });
  };

  const { mutate: addData, isLoading: isAdding } = useMutation(addNewData, {
    onSuccess: () => {
      console.log("✅ Data added successfully");
      queryClient.invalidateQueries("fetch-heros");
    },
    onError: (error) => {
      console.error("Error adding data:", error);
    },
  });

  // ---------------- UPDATE HEROS (EDIT) ----------------
  const editData = async (id) => {
    const payload = {
      name: `ABCD_${id}`,
      username: `abcde@123_${id}`,
      phone: `789654123${id}`,
      email: `abcde${id}@gmail.com`,
    };
    // return axios.patch(`http://localhost:5500/heros/${id}`, payload);
    return request({ url: `/heros/${id}`, method: "PATCH", data: payload });
  };

  const { mutate: edit, isLoading: isEditing } = useMutation(editData, {
    onSuccess: () => {
      console.log("Data updated successfully");
      queryClient.invalidateQueries("fetch-heros");
    },
    onError: (error) => {
      console.error("Error updating data:", error);
    },
  });

  // ---------------- UI ----------------

  // --------------- DELETE HEROS DATA ---------------------
  const deleteHeros = (id) => {
    // return axios.delete(`http://localhost:5500/heros/${id}`);
    return request({ url: `/heros/${id}`, method: "DELETE" });
  };

  const { mutate: del, isLoading: isDeleting } = useMutation(deleteHeros, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-heros");
    },
  });
  // ---------------- UI ----------------
  if (isError) return <div>{error.message}</div>;
  if (isLoading || isFetching) return <div>Loading.....</div>;

  const handlFormChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>RQHeros</h2>
      <button onClick={refetch}>Fetch Data</button>
      <br />
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handlFormChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={form.username}
        onChange={handlFormChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Enter phone"
        value={form.phone}
        onChange={handlFormChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handlFormChange}
      />
      <button onClick={() => addData()} disabled={isAdding}>
        {isAdding ? "Adding..." : "Add Data"}
      </button>

      <ol>
        {data?.map((d) => (
          <li key={d.id}>
            {d.name}{" "}
            <button
              onClick={() => edit(d.id)}
              disabled={isEditing}
              style={{
                padding: "3px 8px",
                margin: "2px 6px",
                borderRadius: "4px",
                background: "#6d6d6d",
                border: "none",
                color: "white",
              }}
            >
              {isEditing ? "Updating..." : "Update"}
            </button>
            <button
              onClick={() => del(d.id)}
              disabled={isDeleting}
              style={{
                padding: "3px 8px",
                margin: "2px 6px",
                borderRadius: "4px",
                background: "#6d6d6d",
                border: "none",
                color: "white",
              }}
            >
              {isEditing ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RQHeros;
