import React from "react";
import "./home.css";
import Header from "./header";
import Search from "./search";
import Footer from "./footer";
import Filters from "./filters";

function Home() {
  return (
    <div>
      <Header />
      <Search />
      <Filters />
      <Footer />
    </div>
  );
}

export default Home;
