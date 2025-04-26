import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./context/DataContext";
import Sales from "./pages/Sales";
import Summary from "./pages/Summary";

function App() {
  return (
    <>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Summary />
            <Sales />
          </main>
        </div>
      </DataContextProvider>
    </>
  );
}

export default App;
