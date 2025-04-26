import React from "react";
import DateRange from "./DateRange";
import Months from "./Months";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  // useLocation é um hook do Router que verifica em qual página estou no momento
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/sales") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [location]);
  return (
    <>
      <header className="mb">
        <div className="daterange mb">
          <DateRange />
          <h1 className="box bg-3">{title}</h1>
        </div>
        <Months />
      </header>
    </>
  );
};

export default Header;
