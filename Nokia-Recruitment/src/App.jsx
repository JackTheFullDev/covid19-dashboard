import "./App.css";

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Dashboard } from "./pages/Dashboard";
import { Table } from "./pages/Table";
import { ApiContextProvider } from "./Context/ApiContext";

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Dashbord" element={<Dashboard />}></Route>
            <Route path="/Table" element={<Table />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ApiContextProvider>
    </div>
  );
}

export default App;
