import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { InfoTable } from "./InfoTable";
import PropTypes from "prop-types";

export const TabsHome = ({ listId }) => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <div style={{ paddingTop: "20px" }}>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        {listId?.map((item, index) => (
          <Tab key={index} eventKey={index.toString()} title={`ID-${item}`}>
            {activeTab === index.toString() && <InfoTable id={item} />}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

TabsHome.propTypes = {
  listId: PropTypes.array.isRequired,
};
