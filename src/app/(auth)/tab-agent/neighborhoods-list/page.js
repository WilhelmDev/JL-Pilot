import { ListPageHeader } from "@/components/tab-agent/lists/Header";
import NeighborhoodCard from "@/components/tab-agent/lists/neighborhoods/NeighborhoodCard";
import { SearchInput } from "@/components/tab-agent/lists/SearchInput";
import { SortByInput } from "@/components/tab-agent/lists/SortByInput";
import { ShowListButton } from "@/components/tab-agent/lists/table/ShowListButton";
import { Table } from "@/components/tab-agent/lists/table/Table";
import { TableBody } from "@/components/tab-agent/lists/table/TableBody";
import { TableCell } from "@/components/tab-agent/lists/table/TableCell";
import { TableHeader } from "@/components/tab-agent/lists/table/TableHeader";
import { TableRow } from "@/components/tab-agent/lists/table/TableRow";
import { ValueDataChipV1 } from "@/components/tab-agent/lists/value-data-chip/ValueDataChipV1";
import { ValueDataChipV2 } from "@/components/tab-agent/lists/value-data-chip/ValueDataChipV2";

const TABLE_HEADERS = [
  "Propiedad y detalles",
  "Precio x Operación",
  "Solicitudes",
  "Ultima Acción",
  "Favoritos y Compartido",
  "Acción",
];

export default function NeighborhoodsListPage() {
  return (
    <>
      <ListPageHeader
        title={"Todos los barrios"}
        subtitle={
          "Estas viendo una lista con todos los barrios de la plataforma."
        }
      />

      <section className="list">
        <div className="row gap-3">
          <SearchInput />
          <SortByInput />
          <button className="col btn btn-lg rounded-0 button">
            Agregar Nuevo
          </button>
        </div>

        <Table>
          <TableHeader headers={TABLE_HEADERS} />
          <TableBody>
            <TableRow>
              <TableCell>
                <NeighborhoodCard
                  imgSrc="/images/neighborhoods/test-img.png"
                  name="Nombre del barrio"
                  type="Tipo del barrio"
                  location="Localidad"
                />
              </TableCell>
              <TableCell>
                <div className="p-2 d-flex flex-column gap-3">
                  <ValueDataChipV1 value={16} label="Propiedades" />
                  <ValueDataChipV1 value={2} label="Emprendimientos" />
                  <ShowListButton />
                </div>
              </TableCell>
              <TableCell>
                <div className="p-2 d-flex flex-column gap-3">
                  <ValueDataChipV2 value={2} label="Visitas" />
                  <ValueDataChipV2 value={1} label="Permuta" />
                  <ValueDataChipV2 value={1} label="Tasación" />
                  <div className="d-flex flex-column">
                    <p className="h5 m-0">12/01/2024</p>
                    <small>(ultima solicitud)</small>
                  </div>
                </div>
              </TableCell>
                <div className="p-2 d-flex flex-column gap-3">
                  <p></p>
                </div>
              <TableCell></TableCell>
              <TableCell>Favoritos y Compartido</TableCell>
              <TableCell>Acción</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </>
  );
}
