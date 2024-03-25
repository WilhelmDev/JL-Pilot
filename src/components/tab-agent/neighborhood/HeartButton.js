import { useState } from "react";
import { HeartIcon } from "../Icon"; // Asegúrate de que esta ruta de importación sea correcta

const HeartButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Cambia el estado a su valor opuesto
  };

  return (
    <button className="heart-button" onClick={handleClick}>
      <HeartIcon fill={clicked ? "red" : "currentColor"} />
    </button>
  );
};

export default HeartButton;
