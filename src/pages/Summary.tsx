import SalesChart from "../components/SalesChart";
import { useData } from "../context/DataContext";

const Summary = () => {
  const { data } = useData();
  if (data === null) return null;
  return (
    <>
      <section>
        <div className="summary flex mb">
          <div className="box">
            <h2>Vendas</h2>
            <span>
              {data
                // Filtro vai retornar apenas os itens/obj que não tiver o status falha
                .filter((i) => i.status !== "falha")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </div>
          <div className="box">
            <h2>Recebido</h2>
            <span>
              {data
                // Filtro vai retornar apenas os itens/obj que tiver o status igual
                // a 'pago', e fazer a somar normal do preco
                .filter((i) => i.status === "pago")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </div>
          <div className="box">
            <h2>Vendas</h2>
            <span>
              {data
                .filter((i) => i.status === "processando")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </div>
        </div>
        <div className="box mb">
          <SalesChart data={data} />
        </div>
      </section>
    </>
  );
};

export default Summary;
