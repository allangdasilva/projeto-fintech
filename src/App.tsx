import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./context/DataContext";
import Summary from "./pages/Summary";

function App() {
  return (
    <>
      <DataContextProvider>
        <Sidenav />
        <main>
          <Header />
          <Summary />
        </main>
      </DataContextProvider>
    </>
  );
}

export default App;
