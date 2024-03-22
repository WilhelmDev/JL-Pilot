"use client";
import Select from "react-select";

const videoField = [
  { value: "Youtube", label: "Youtube" },
  { value: "Facebook", label: "Facebook" },
  { value: "Vimeo", label: "Vimeo" },
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

const VideoOptionFiledCustom = () => {
  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Plataforma de video
          </label>
          <div className="location-area">
            <Select
              defaultValue={''}
              name="colors"
              options={videoField}
              styles={customStyles}
              className="select-custom pl-0"
              classNamePrefix="select"
              required
              isMulti
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Link del video
          </label>
          <input type="text" className="form-control" placeholder="Copia y pega el link aqui" />
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Seleccione portada (Medios Cargados)
          </label>
          <div className="location-area">
            <Select
              defaultValue={''}
              name="colors"
              options={videoField}
              styles={customStyles}
              className="select-custom pl-0"
              classNamePrefix="select"
              required
              isMulti
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoOptionFiledCustom;
