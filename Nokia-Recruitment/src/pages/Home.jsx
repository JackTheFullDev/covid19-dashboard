import { useState, useEffect } from "react";
import { MdTableChart } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import "../style/Home.css";
import Typed from 'react-typed'

import { MyLink } from "../components/MyLink";

export const Home = () => {
  return (
    <section className="home-container">
      <h1 style={{color:"white"}}>Welcom to your Covid-19 daily  <Typed strings={["Informator","Dashboard","Statisitc", "Knowladge"]} typeSpeed={120}  backSpeed={100} loop style={{color:"#05BFDB"}}/></h1>
      <div className="home-components-section">
        <MyLink icon={<MdTableChart />} to="/table"></MyLink>
        <MyLink icon={<BsFillBarChartLineFill />} to="/chart"></MyLink>
        <MyLink icon={<MdOutlineSpaceDashboard />} to="/dashbord"></MyLink>
      </div>
    </section>
  );
};
