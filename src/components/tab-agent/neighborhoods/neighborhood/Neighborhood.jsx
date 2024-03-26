import Image from "next/image";

const Neighborhood = () => {
  //TODO: make Favorites and Shared components's icons accessible
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
        alt="Eliminar"
      />
      <ActionButton
        actionRedirect="#"
        imgSrc="/images/custom/pencil.svg"
        alt="Editar"
      />
      <ActionButton
        actionRedirect="#"
        imgSrc="/images/tab-agent/share.svg"
        alt="Compartir"
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
    <span className="icon favorites-icon"></span>
    <span>10 Favoritos</span>
  </div>
);

const Shared = () => (
  <div>
    <span className="icon shared-icon"></span>
    <span>Compartido 20</span>
  </div>
);

const ActionButton = ({ actionRedirect, imgSrc, alt }) => (
  <a href={actionRedirect}>
    <Image src={imgSrc} width={14} height={14} alt={alt} />
  </a>
);
