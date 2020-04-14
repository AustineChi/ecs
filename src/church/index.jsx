import React from "react";
import Header from "../layouts/Header";
import HeaderFilter from "../layouts/HeaderFilter";
import ChurchCard from "./ChurchCard";

function Index() {
  return (
    <div>
      <Header />
      <HeaderFilter />
      <div className="container">
        <div className="header-3 mt-30">
          +250 Churches in <span className="text-color-red"> Barcelona</span>
        </div>
        <ChurchCard />
        <ChurchCard />
      </div>

      <div className="space-3"></div>
    </div>
  );
}

export default Index;