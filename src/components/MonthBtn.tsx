import React from "react";
import { useData } from "../context/DataContext";

const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};
function nameMonth(n: number) {
  const date = new Date();
  // O setMonth já seta o mês de date. O getMonth + n pega a 'posição' do mês
  date.setMonth(date.getMonth() + n);
  // Intl é um objeto de internalização, que serve para a gente conseguir pegar
  // nomes, valores, de acordo com alguma lingua
  const nome = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
  return nome;
}

const MonthBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  // Essa função vai me dar o primeiro e o último dia de cada mês.
  // E vai setar o inicio e o final, sendo assim chamando a api a cada clique no botão
  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    // No new Date a gente consegue montar a data que quiser. Aqui está
    // montando a data baseada no mês de forma dinâmica
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // O último dia é simples, é o próximo mês no dia 0, ou seja um dia anterior
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // Passa os dias dentro da função que formata a data para o formato aceito na api
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }
  return (
    <>
      <button
        className="monthBtn"
        style={buttonStyle}
        onClick={() => setMonth(n)}
      >
        {nameMonth(n)}
      </button>
    </>
  );
};

export default MonthBtn;
