import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMETN":
      return {};
  }
};
const initialState = {
  count: 0,
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(initialState);

  return <div>UseReducer</div>;
};

export default UseReducer;
