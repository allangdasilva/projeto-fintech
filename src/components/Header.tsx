import React from "react";
import { useData } from "../context/DataContext";

const Header = () => {
  const { data } = useData();
  return <div>Header</div>;
};

export default Header;
