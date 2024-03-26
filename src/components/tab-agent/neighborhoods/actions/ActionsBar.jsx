import Add from "./Add";
import Search from "./Search";
import OrderBy from "./OrderBy";

const ActionsBar = () => {
  //TODO: add meaningful aria-labels to Search, OrderBy and Add for accessibility
  return (
    <section id="actions">
      <form method="GET" role="search">
        <Search />
        <OrderBy />
      </form>
      <Add />
    </section>
  );
};

export default ActionsBar;
