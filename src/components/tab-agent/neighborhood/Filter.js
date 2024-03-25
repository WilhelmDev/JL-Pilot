import React from "react";

export default function FilterNeighborhood() {
  return (
    <div className="info-item">
      <div className="input-group mb-3">
        <select class="input-group-custom form-select" id="inputGroupSelect01">
          <option selected disabled>
            Ordenar por : Nombre A - Z
          </option>
          <option value="1">Nombre</option>
          <option value="2">Cantidad de propiedades</option>
        </select>
      </div>
    </div>
  );
}
