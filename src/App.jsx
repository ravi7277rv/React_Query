import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heros from "./pages/Heros";
import RQHeros from "./pages/RQHeros";
import Navbar from "./components/layouts/basics/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactHookForm from "./pages/ReactHookForm";

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
        </Routes>
        <ReactQueryDevtools />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
