import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { TableCreate } from "./TableCreate";
import '../../styles/components/accordion.css';

export const AccordionTable = ({ count, data }) => {
  const [keyFirstAcc, setKeyFirstAcc] = useState(null);
  const [countFirst, setCountFirst] = useState(0);
  const [dataFirst, setDataFirst] = useState(null);

  useEffect(() => {
    if (count === 1 && data?.data?.length > 0) {
      setKeyFirstAcc(data?.data[0].type.toUpperCase());
      setCountFirst(data?.total);
      setDataFirst(data?.data);
    } else if (data?.data_demandantes?.length > 0) {
      setKeyFirstAcc(data?.data_demandantes[0].type.toUpperCase());
      setCountFirst(data?.count_demandante);
      setDataFirst(data?.data_demandantes);
    }
  }, [count, data]);

  if (!keyFirstAcc) {
    return null;
  }

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{`${keyFirstAcc}S (${countFirst})`}</Accordion.Header>
        <Accordion.Body>
          <TableCreate data={dataFirst} />
        </Accordion.Body>
      </Accordion.Item>

      {count === 2 && (
        <Accordion.Item eventKey="1">
          <Accordion.Header>{`${data?.data_demandados[0].type.toUpperCase()}S (${
            data?.count_demandados
          })`}</Accordion.Header>
          <Accordion.Body>
            <TableCreate data={data?.data_demandados} />
          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>
  );
};

AccordionTable.propTypes = {
  count: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};
