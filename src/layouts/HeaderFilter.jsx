import React from "react";

function HeaderFilter() {
  return (
    <section className="container add-border-bottom">
      <div className="head-filter">
        <div className="filter-item  ">
          <span className="tab-underline">Parroquias</span>
        </div>
        <div className="filter-item ">
          <span>Sacerdotes</span>
        </div>
        <div className="filter-item ">
          <span>Movimientos</span>
        </div>
      </div>
      <div className="my-3  row">
        <div className="col-sm-3">
          <select name="" id="" className="custom-select input-select">
            <option value="">Lugar y ciudad</option>
            <option value="">two</option>
            <option value="">three</option>
          </select>
        </div>

        <div className="col-sm-3">
          <select name="" id="" className="custom-select  input-select">
            <option value="">Misas y actos de piedad</option>
            <option value="">two</option>
            <option value="">three</option>
          </select>
        </div>
        <div className="col-sm-2">
          <select name="" id="" className="custom-select input-select">
            <option value="">Más opciones</option>
            <option value="">two</option>
            <option value="">three</option>
          </select>
        </div>
        <div className="col-sm-3">
          <button className="btn filter-btn">Buscar Parroquias</button>
        </div>
      </div>
    </section>
  );
}

export default HeaderFilter;
