import Image from "next/image";

export function SearchInput() {
  return (
    <label className="position-relative col-2 p-0">
      <Image
        src="/images/search-icon.svg"
        width={18}
        height={18}
        className="position-absolute top-50 translate-middle-y ms-3"
        alt="Buscar"
      />
      <input
        className="form-control rounded-0 form-control-lg ps-5 w-100"
        type="text"
        placeholder="Buscar"
      />
    </label>
  );
}
