import { HeartIcon, ShareIcon, TrashIcon, PencilIcon } from "@/icons/icons";

const Table = () => {
  return (
    <table className="table align-middle mb-0 bg-white">
      <thead>
        <tr className="text-center">
          <th>Propiedad y detalles</th>
          <th>Precio x Operación</th>
          <th>Solicitudes</th>
          <th>Última Acción</th>
          <th>Favoritos y Compartido</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4">
            <div className="d-flex align-items-center">
              <img src="https://picsum.photos/150/200" alt="property-image" />
              <div className="ms-3">
                <p className="fw-bold mb-1">Nombre del Barrio</p>
                <p className="text-muted mb-0">Tipo de barrio</p>
                <p className="text-muted mb-0">Localidad</p>
              </div>
            </div>
          </td>
          <td className="p-4">
            <div className="operation-price-box">
              <p className="grey-text-box">
                <span className="fw-bold">16</span>Propiedades
              </p>
              <p className="grey-text-box">
                <span className="fw-bold">2</span>Emprendimientos
              </p>
              <button className="list-button">VER LISTA</button>
            </div>
          </td>
          <td className="p-4">
            <div className="text-center">
              <p className="request-text">2 Visitas</p>
              <p className="request-text">1 Permuta</p>
              <p className="request-text">1 Tasación</p>
              <h4>12/01/2024</h4>
              <h6>(Última solicitud)</h6>
            </div>
          </td>
          <td className="p-4">
            {" "}
            <p>{"nombre de usuario"}</p>S solicito una visita
          </td>
          <td className="p-4">
            <div className="text-center">
              <div>
                <HeartIcon className="p-2" />
                <p>10 Favoritos</p>
              </div>
              <div>
                <ShareIcon className="p-2" />
                <p>Compartido 20</p>
              </div>
            </div>
          </td>
          <td className="p-4">
            <div className="m-2 d-flex justify-content-center">
              <button className="btn btn-outline-dark">
                <TrashIcon />
              </button>
            </div>
            <div className="d-flex flex-nowrap justify-content-center">
              <div>
                <button className="btn btn-outline-dark m-2">
                  <ShareIcon />
                </button>
              </div>
              <div>
                <button className="btn btn-outline-dark m-2">
                  <PencilIcon />
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
