import { useParams } from "react-router-dom";
import { IVenda } from "../context/DataContext";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

// Omit é um tipo específico do TS que omite uma informação do objeto
type VendaSemData = Omit<IVenda, "data">;

const Sale = () => {
  // useParams é um hook do Router dom, que pega od parâmetros, nesse caso vamos
  // pega o própio parâmetro que eu dei o 'id'
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );
  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </>
  );
};

export default Sale;
