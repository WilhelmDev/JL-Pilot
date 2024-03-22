"use client";
import Select from "react-select";
import Map from "../property/dashboard/dashboard-add-property/LocationField/Map";

const PropertyDescriptionCustom = () => {
  const catergoryOptions = [
    { value: "Apartments", label: "Apartments" },
    { value: "Bungalow", label: "Bungalow" },
    { value: "Houses", label: "Houses" },
    { value: "Loft", label: "Loft" },
    { value: "Office", label: "Office" },
    { value: "Townhome", label: "Townhome" },
    { value: "Villa", label: "Villa" },
  ];
  const listedIn = [
    { value: "All Listing", label: "All Listing" },
    { value: "Active", label: "Active" },
    { value: "Sold", label: "Sold" },
    { value: "Processing", label: "Processing" },
  ];
  const PropertyStatus = [
    { value: "All Cities", label: "All Cities" },
    { value: "Pending", label: "Pending" },
    { value: "Processing", label: "Processing" },
    { value: "Published", label: "Published" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la localidad"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">País</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del país"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Provincia</label>
            <input
              type="text"
              className="form-control"
              placeholder="Provincia"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Partido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Partido"
            />
          </div>
        </div>
        {/* End .col-12 */}

          <div className="row col-3">
            <div className="col-sm-12">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">Selecciona en el mapa o usa las corde</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Latitud: EJ O´12,123,3"
                  />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Longitud: EJ S´123,12,12"
                  />
              </div>
            </div>
          </div>
          <div className="col-9">
            <Map />
          </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default PropertyDescriptionCustom;