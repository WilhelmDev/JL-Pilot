const PaginationButton = ({
  baseHref,
  pageNumber,
  previous = false,
  next = false,
  current = false,
}) => {
  // TODO: disabled pagination button and its styles
  // TODO: make current page number button non clickable
  const isChanger = next || previous ? "changer" : "";
  const isCurrent = current ? "current" : "";
  const classNames = `${isChanger} ${isCurrent}`;

  return (
    <li className={classNames}>
      <a href={`${baseHref}/${pageNumber}`}>
        {next && !previous && ">"}
        {previous && !next && "<"}
        {!next && !previous && pageNumber}
      </a>
    </li>
  );
};

export default PaginationButton;
