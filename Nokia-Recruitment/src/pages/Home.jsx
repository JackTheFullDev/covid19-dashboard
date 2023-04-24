import { useState, useEffect } from "react";
import { MdTableChart } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { MyLink } from "../components/MyLink";

export const Home = () => {
  return (
    <section className="home-container">
      <h1>Welcom to Covid-19 informator</h1>
      <div className="home-components-section">
        <MyLink icon={<MdTableChart />} to="/table"></MyLink>
        <MyLink icon={<BsFillBarChartLineFill />} to="/chart"></MyLink>
        <MyLink icon={<MdOutlineSpaceDashboard />} to="/dashbord"></MyLink>
      </div>
    </section>
  );
};
