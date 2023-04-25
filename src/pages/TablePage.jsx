import { Link } from "react-router-dom";
import { MyTable } from "../components/MyTable";
import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import "../style/Table.css";
import React from "react";
import { Suspense } from "react";

export const TablePage = () => {
  const { apiData } = useContext(ApiContext);
  const { Countries } = apiData || {};

  return (
    <section className="table">
      <MyTable Countries={Countries} />
      <Link to="/">Back to Home</Link>
    </section>
  );
};
