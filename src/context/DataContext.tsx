import React from "react";
import useFetch from "../hooks/useFetch";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  final: string;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};
type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "pix" | "cartao" | "boleto";
  parcelas: number | null;
  data: string;
};
const DataContext = React.createContext<IDataContext | null>(null);
function getDate(n: number) {
  const date = new Date();
  // O get date aceita um numero para somar ao dia.
  date.setDate(date.getDate() - n);
  // Pego a data, transformo em string, uso o padStart para adicionar '0' antes
  // da data/dia. padStart recebe 2 parâmetros, um number que é o tamanho maximo
  // dessa string para adicionar a string que você desejar '0'
  const dd = String(date.getDate()).padStart(2, "0");
  // Mesma coisa para o mês
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  // O ano não precisa transformar em string já que não quero fazer alteração nenhuma
  const yyyy = date.getFullYear();
  // retorno a string montada no formato que a api consegue ler
  return `${yyyy}-${mm}-${dd}`;
}

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(14));
  const [final, setFinal] = React.useState(getDate(0));
  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );
  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
