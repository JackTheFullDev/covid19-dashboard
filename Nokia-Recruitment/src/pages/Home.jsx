import { useState, useEffect } from "react";
import { MdTableChart } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import "../style/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home-container">
      <h1>Welcom to Covid-19 date</h1>
      <div className="home-components-section">
        <Link to="/" className="home-component">
          <MdTableChart />
        </Link>
        <Link to="/" className="home-component">
          <BsFillBarChartLineFill />
        </Link>
        <Link to="/dashbord" className="home-component">
          <MdOutlineSpaceDashboard />
        </Link>
      </div>
    </section>
  );
};
