import Image from "next/image";
import React from "react";
import TableTabAgent from "@/components/tab-agent/neighborhood/Table";
import Pagination from "@/components/listing/Pagination";

export const metadata = {
  title: "Tablero de barrios",
};

const AgentTabBarrio = ({ params }) => {
  return (
    <>
      <section className="main-content" id="agent-tab-barrio">
        <div className="info-user-cont">
          <p className="welcome-user">Todos los barrios</p>
          <span>
            Estas viendo una lista con todos los barrios de la plataforma.
          </span>
        </div>
        <div className="general-info-cont">
          <div className="info-item">
            <div className="input-icon-container">
              <span className="flaticon-search"></span>
              <input
                className="form-search"
                placeholder="Buscar"
                type="text"
              ></input>
            </div>
          </div>
          <div className="info-item">
            <div className="input-group mb-3">
              <select
                class="input-group-custom form-select"
                id="inputGroupSelect01"
              >
                <option selected disabled>
                  Ordenar por : Nombre A - Z
                </option>
                <option value="1">Nombre</option>
                <option value="2">Cantidad de propiedades</option>
              </select>
            </div>
          </div>
          <div className="info-item">
            <button className="input-submit-custom btn btn-primary">
              Agregar nuevo
            </button>
          </div>
        </div>

        <TableTabAgent />

        <div className="row mt-5">
          <div className="mbp_pagination text-center">
            <Pagination />
            <p className="mt10 pagination_page_count text-center"></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentTabBarrio;
