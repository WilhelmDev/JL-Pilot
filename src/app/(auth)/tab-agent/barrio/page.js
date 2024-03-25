import Image from "next/image";
import React from "react";
import TableTabAgent from "@/components/tab-agent/neighborhood/Table";
import SearchNeighborhood from "@/components/tab-agent/neighborhood/Search";
import FilterNeighborhood from "@/components/tab-agent/neighborhood/Filter";
import TitleNeighborhood from "@/components/tab-agent/neighborhood/Title";
import Pagination from "@/components/listing/Pagination";

export const metadata = {
  title: "Tablero de barrios",
};

const AgentTabBarrio = ({ params }) => {
  return (
    <>
      <section className="main-content" id="agent-tab-barrio">
        <TitleNeighborhood />
        <div className="general-info-cont">
          <SearchNeighborhood />
          <FilterNeighborhood />
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
