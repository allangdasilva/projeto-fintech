import DateInput from "./DateInput";
import { useData } from "../context/DataContext";

const DateRange = () => {
  const { inicio, final, setInicio, setFinal } = useData();

  return (
    <>
      <form className="box flex" onSubmit={(event) => event.preventDefault()}>
        <DateInput
          label="Início"
          id="inicio"
          value={inicio}
          onChange={({ target }) => setInicio(target.value)}
        />
        {inicio}
        <DateInput
          label="Final"
          id="final"
          value={final}
          onChange={({ target }) => setFinal(target.value)}
        />
        {final}
      </form>
    </>
  );
};

export default DateRange;
