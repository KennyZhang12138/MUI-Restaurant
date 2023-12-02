import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>T Jin China Diner</h1>
          <p>Food in China</p>
          <Link to="/menu">
            <button>CHECK MENU</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
