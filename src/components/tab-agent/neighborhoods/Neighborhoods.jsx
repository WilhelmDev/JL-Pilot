import Neighborhood from "./neighborhood/Neighborhood";
import Pagination from "./pagination/Pagination.jsx";
import ActionsBar from "./actions/ActionsBar";

const Neighborhoods = () => {
  return (
    <>
      <header>
        <h2>Todos los Barrios</h2>
        <p>Estás viendo una lista con todos los barrios de la plataforma.</p>
      </header>
      <div id="neighborhoods-container">
        <ActionsBar />
        <div className="table-responsive">
          <table className="table align-middle" id="neighborhoods">
            <thead>
              <tr>
                <th scope="col">Propiedades y detalles</th>
                <th scope="col">Precio x Operación</th>
                <th scope="col">Solicitudes</th>
                <th scope="col">Ultima Acción</th>
                <th scope="col">Favoritos y Compartido</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              <Neighborhood />
              <Neighborhood />
              <Neighborhood />
              <Neighborhood />
            </tbody>
          </table>
        </div>
        <Pagination baseHref="/tab-agent/neighborhoods" />
      </div>
    </>
  );
};

export default Neighborhoods;
