import React from "react";
import { useData } from "../context/DataContext";
import SalesItem from "../components/SalesItem";

const Sales = () => {
  const { data } = useData();
  return (
    <>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <SalesItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sales;
