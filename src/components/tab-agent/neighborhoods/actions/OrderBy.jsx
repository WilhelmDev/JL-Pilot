"use client";

const OrderBy = () => {
  //TODO: fix bug where the select doesn't open when clicking on its label
  return (
    <label className="order-by">
      <span>Ordenar por:</span>
      <select name="orderBy" id="order-by-select">
        <option value="" selected>
          Nombre A - Z
        </option>
        <option value="">Nombre Z - A</option>
      </select>
    </label>
  );
};

export default OrderBy;
