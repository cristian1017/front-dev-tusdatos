import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { DataService } from "../../services/data.service";
import { AccordionTable } from "./AccordionTable";
import Spinner from "react-bootstrap/Spinner";
import "../../styles/components/accordion.css";

export const InfoTable = ({ id }) => {
  const dataService = new DataService();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const fetchDataId = async () => {
    setIsLoading(true);
    const [error, resp] = await dataService.get_data_id(id);
    if (error) {
      setIsLoading(false);
    }

    setData(resp);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataId();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container-info-accordion">
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        data &&
        (data?.data ? (
          <AccordionTable count={1} data={data} />
        ) : (
          <AccordionTable count={2} data={data} />
        ))
      )}
    </div>
  );
};

InfoTable.propTypes = {
  id: PropTypes.string.isRequired,
};
