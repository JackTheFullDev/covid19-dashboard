import "./App.css";

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { DashboardPage } from "./pages/DashboardPage";
import { TablePage } from "./pages/TablePage";
import { ApiContextProvider } from "./context/ApiContext";
import { ChartPage } from "./pages/ChartPage";
import { QueryClientProvider,QueryClient } from "react-query";
function App() {
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
