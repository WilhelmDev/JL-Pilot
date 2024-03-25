import Table from "@/components/tab-agent/Table";
import Pagination from "@/components/listing/Pagination";

const AgentTabBarrio = ({ params }) => {
  return (
    <div className="container">
      <div className="m-4">
        <h3>Todos los Barrios</h3>
        <h6>Estás viendo una lista de todos los barrios de la plataforma.</h6>
      </div>

      <div className="m-5">
        <div className="d-inline-flex">
          <div className="input-box">
            <div className="input-icon-box">
              <span className="flaticon-search"></span>
              <input
                type="text"
                class="form-control"
                id="input-field"
                placeholder="      Buscar"
              />
            </div>
          </div>

          <div className="m-4">
            <div>
              <select className="form-select" id="dropdown-box">
                <option>
                  Ordenar por :{" "}
                  <span className="fw-bold mb-1">Nombre A - Z</span>
                </option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
              </select>
            </div>
          </div>

          <div className="m-4">
            <button type="button" id="search-button">
              Agregar nuevo
            </button>
          </div>
        </div>

        <div className="py-4">
          <Table />
        </div>

        <div className="pagination-container">
          <div className="row mt-5">
            <div className="mbp_pagination text-center">
              <Pagination />
              <p className="mt10 pagination_page_count text-center"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentTabBarrio;
