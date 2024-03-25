import React from "react";
import Image from "next/image";

const SearchFilter = () => {
  return (
    <label className="search-neighborhoods">
      <Image
        src="/images/tab-agent/all-neighborhoods/search.svg"
        alt="search"
        height={20}
        width={20}
        className="img"
      />
      <input type="text" placeholder="Buscar" className="search-input" />
    </label>
  );
};

export default SearchFilter;
