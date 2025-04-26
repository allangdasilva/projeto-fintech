import { IVenda } from "../context/DataContext";

const SalesItem = ({ item }: { item: IVenda }) => {
  return (
    <>
      <div className="sale box">
        <a href="" style={{ fontFamily: "monospace" }}>
          {item.id}
        </a>
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
