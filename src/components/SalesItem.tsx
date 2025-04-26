import { NavLink } from "react-router-dom";
import { IVenda } from "../context/DataContext";

const SalesItem = ({ item }: { item: IVenda }) => {
  return (
    <>
      <div className="sale box">
        <NavLink to={`/sales/${item.id}`} style={{ fontFamily: "monospace" }}>
          {item.id}
        </NavLink>
        <div>{item.nome}</div>
        <div>
          {item.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
    </>
  );
};

export default SalesItem;
