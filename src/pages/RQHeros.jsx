import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const RQHeros = () => {
  const queryClient = useQueryClient();

  // ---------------- SUCCESS / ERROR HANDLERS ----------------
  const onSuccess = (data) => {
    console.log("✅ Data fetched successfully:", data);
  };

  const onError = (error) => {
    console.error("Error fetching data:", error);
  };

  // ---------------- FETCH HEROS (READ) ----------------
  const fetchData = () => axios.get("http://localhost:5500/heros");

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
      name: `Rahul Singh Chauhan ${count}`,
      username: `rishabh@${count}`,
      phone: `89859650${count}`,
      email: `rishabhsingh${count}@gmail.com`,
    };
    return axios.post("http://localhost:5500/heros", payload);
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
    debugger;
    const payload = {
      name: `ABCD_${id}`,
      username: `abcde@123_${id}`,
      phone: `789654123${id}`,
      email: `abcde${id}@gmail.com`,
    };
    return axios.patch(`http://localhost:5500/heros/${id}`, payload);
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
    return axios.delete(`http://localhost:5500/heros/${id}`);
  };

  const { mutate: del, isLoading: isDeleting } = useMutation(deleteHeros, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-heros");
    },
  });
  // ---------------- UI ----------------
  if (isError) return <div>{error.message}</div>;
  if (isLoading || isFetching) return <div>Loading.....</div>;

  return (
    <div>
      <h2>RQHeros</h2>
      <button onClick={refetch}>Fetch Data</button>
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
