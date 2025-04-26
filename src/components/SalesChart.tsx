import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../context/DataContext";

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const days = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    acc[day][item.status] += item.preco;

    return acc;
  }, {});
  return Object.values(days).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const SalesChart = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <>
      <ResponsiveContainer width={"99%"} height={400}>
        <LineChart width={400} height={400} data={transformedData}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#d32417"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#3147c0"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#19a806"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesChart;
