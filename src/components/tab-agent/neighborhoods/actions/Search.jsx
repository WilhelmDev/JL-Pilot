import Image from "next/image";

const Search = () => {
  return (
    <label>
      <Image src="/images/tab-agent/lens.svg" width={18} height={18} alt="" />
      <input placeholder="Buscar" type="search" name="q" />
    </label>
  );
};

export default Search;
