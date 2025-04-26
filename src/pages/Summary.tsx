import { useData } from "../context/DataContext";

const Summary = () => {
  const { data } = useData();
  console.log(data);
  return <div>Summary</div>;
};

export default Summary;
