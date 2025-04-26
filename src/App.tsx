import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./context/DataContext";
import Sales from "./pages/Sales";
import Summary from "./pages/Summary";
import Sale from "./pages/Sale";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <div className="container">
            <Sidenav />
            <main>
              <Header />
              <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/sales/:id" element={<Sale />} />
              </Routes>
            </main>
          </div>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
