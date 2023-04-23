import "./App.css";

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { DashboardPage } from "./pages/DashboardPage";
import { TablePage } from "./pages/TablePage";
import { ApiContextProvider } from "./Context/ApiContext";
import { ChartPage } from "./pages/ChartPage";

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Dashbord" element={<DashboardPage />}></Route>
            <Route path="/Table" element={<TablePage />}></Route>
            <Route path="/Chart" element={<ChartPage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ApiContextProvider>
    </div>
  );
}

export default App;
