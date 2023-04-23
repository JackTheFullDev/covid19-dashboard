import { useState, useEffect } from "react";
import { MdTableChart } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import "../style/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home-container">
      <h1>Welcom to Covid-19 informator</h1>
      <div className="home-components-section">
        <Link to="/table" className="home-component">
          <MdTableChart />
          <div className="table-page-content">Table</div>
        </Link>
        <Link to="/Chart" className="home-component">
          <BsFillBarChartLineFill />
          <div className="chart-page-content">Chart</div>
        </Link>
        <Link to="/dashbord" className="home-component">
          <MdOutlineSpaceDashboard />
          <div className="dashboard-page-content">Dasboard</div>
        </Link>
      </div>
    </section>
  );
};
