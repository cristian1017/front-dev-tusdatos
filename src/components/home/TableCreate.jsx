import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { sumActuacionesJudiciales } from "../../utils/utils";

export const TableCreate = ({ data }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th># Juicio</th>
          <th>Fecha Ingreso</th>
          <th>Delito</th>
          <th>Sub Procesos</th>
          <th>#Actuaciones Judiciales</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((row, index) => (
            <tr key={index}>
              <td>{row?.idJuicio}</td>
              <td>{row?.fechaIngreso}</td>
              <td>{row?.details?.nombreDelito}</td>
              <td>{row?.details?.subProcess.length}</td>
              <td>{sumActuacionesJudiciales(row)}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

TableCreate.propTypes = {
  data: PropTypes.array.isRequired,
};
