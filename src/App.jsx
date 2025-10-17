import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/basics/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UseStateHook from "./components/react-hooks/UseStateHook";

// Lazy Loading
const Home = React.lazy(() => import("./pages/Home"));
const Heros = React.lazy(() => import("./pages/Heros"));
const RQHeros = React.lazy(() => import("./pages/RQHeros"));
const ReactHookForm = React.lazy(() => import("./pages/ReactHookForm"));
const Debounce = React.lazy(() => import("./pages/Debounce"));
const Hooks = React.lazy(() => import("./pages/Hooks"));

const clietnQuery = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={clietnQuery}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/heros" Component={Heros} />
          <Route path="/rqheros" Component={RQHeros} />
          <Route path="/reacthookform" Component={ReactHookForm} />
          <Route path="/debounce" Component={Debounce} />
          <Route path="/hooks" Component={Hooks} />
        </Routes>
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
