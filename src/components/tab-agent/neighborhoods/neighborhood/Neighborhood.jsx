import Image from "next/image";

const Neighborhood = () => {
  //TODO: make Favorites and Shared components's icons focusable
  return (
    <tr>
      <PropertiesAndDetails />
      <PricePerOperation />
      <Requests />
      <LastAction />
      <FavoritesAndShared />
      <Actions />
    </tr>
  );
};

export default Neighborhood;

const PropertiesAndDetails = () => (
  <th scope="row">
    <div className="neighborhood-properties-and-details">
      <Image
        src="/images/tab-agent/example-neighborhood.jpg"
        width={110}
        height={143}
        alt=""
      />
      <div>
        <p className="neighborhood-name">Nombre del Barrio</p>
        <p className="neighborhood-type">Tipo de barrio</p>
        <p className="neighborhood-location">Localidad</p>
      </div>
    </div>
  </th>
);

const PricePerOperation = () => (
  <td>
    <div className="neighborhood-price-per-operation">
      <DetailBox gray={true}>
        <span>16</span>
        <span className="neighborhood-detail-box-small-text">Propiedades</span>
      </DetailBox>
      <DetailBox gray={true}>
        <span>2</span>
        <span className="neighborhood-detail-box-small-text">
          Emprendimientos
        </span>
      </DetailBox>
      <WatchListButton />
    </div>
  </td>
);

const Requests = () => (
  <td>
    <div className="neighborhood-requests">
      <DetailBox blue="true">2 Visitas</DetailBox>
      <DetailBox blue="true">1 Permuta</DetailBox>
      <DetailBox blue="true">1 Tasación</DetailBox>
      <div>
        <p>12/01/2024</p>
        <small>(última solicitud)</small>
      </div>
    </div>
  </td>
);

const LastAction = () => (
  <td>
    <div className="neighborhood-last-action">
      <p>{"{nombre de usuario}S solicitó una visita"}</p>
    </div>
  </td>
);

const FavoritesAndShared = () => (
  <td>
    <div className="neighborhood-favorites-and-shared">
      <Favorites />
      <Shared />
    </div>
  </td>
);

const Actions = () => (
  <td>
    <div className="neighborhood-actions">
      <ActionButton
        actionRedirect="#"
        imgSrc="/images/custom/trash.svg"
        ariaLabel="Eliminar barrio"
      />
      <ActionButton
        actionRedirect="#"
        imgSrc="/images/custom/pencil.svg"
        ariaLabel="Editar barrio"
      />
      <ActionButton
        actionRedirect="#"
        imgSrc="/images/tab-agent/share.svg"
        ariaLabel="Compartir barrio"
      />
    </div>
  </td>
);

const DetailBox = ({ children, gray = false, blue = false }) => {
  const isGrayDetailBox = gray ? "neighborhood-detail-box-gray" : "";
  const isBlueDetailBox = blue ? "neighborhood-detail-box-blue" : "";

  return (
    <div
      className={`neighborhood-detail-box ${isGrayDetailBox} ${isBlueDetailBox}`}
    >
      {children}
    </div>
  );
};

const WatchListButton = () => (
  <a href="#" className="neighborhood-detail-box neighborhood-watch-list">
    Ver lista
  </a>
);

const Favorites = () => (
  <div>
    <span
      className="icon favorites-icon"
      role="img"
      aria-label="Añadir a favoritos"
    ></span>
    <span>10 Favoritos</span>
  </div>
);

const Shared = () => (
  <div>
    <span className="icon shared-icon" role="img" aria-label="Compartir"></span>
    <span>Compartido 20</span>
  </div>
);

const ActionButton = ({
  actionRedirect,
  imgSrc,
  className = "",
  ariaLabel,
}) => (
  <a href={actionRedirect}>
    <span
      className={`actions-icon ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{ maskImage: `url(${imgSrc})` }}
    ></span>
  </a>
);
