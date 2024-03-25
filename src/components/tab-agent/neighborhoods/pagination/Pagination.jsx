import PaginationButton from "./PaginationButton";

const Pagination = ({ baseHref }) => {
  const paginationAriaLabel = "Neighborhoods list results pages";

  return (
    <nav id="pagination" aria-label={paginationAriaLabel}>
      <ul>
        <PaginationButton baseHref={baseHref} pageNumber="1" previous />
        <PaginationButton baseHref={baseHref} pageNumber="1" />
        <PaginationButton baseHref={baseHref} pageNumber="2" current />
        <PaginationButton baseHref={baseHref} pageNumber="3" />
        <PaginationButton baseHref={baseHref} pageNumber="4" />
        <PaginationButton baseHref={baseHref} pageNumber="5" />
        <PaginationButton baseHref={baseHref} pageNumber="3" next />
      </ul>
      <p>1-5 de 300+ Propiedades</p>
    </nav>
  );
};

export default Pagination;
