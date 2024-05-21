import { useEffect, useState } from "react";
import { BtnScrapper } from "../../components/home/BtnScrapper";
import { Header } from "../../components/home/Header";
import { ImgNotData } from "../../components/home/ImgNotData";
import { TabsHome } from "../../components/home/TabsHome";
import { DataService } from "../../services/data.service";
import "../../styles/pages/home.css";

export const Home = () => {
  const dataService = new DataService();

  const [isDataScraperSucces, setIsDataScraperSucces] = useState(false);
  const [listId, setListId] = useState(null);

  const fetchList = async () => {
    const [error, resp] = await dataService.get_data();
    if (error) {
      setListId([]);
    }
    setListId(resp);
    100;
  };

  useEffect(() => {
    if (isDataScraperSucces) {
      fetchList();
    }
  }, [isDataScraperSucces]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container-home">
      <Header />
      {listId?.length > 0 ? (
        <TabsHome listId={listId} />
      ) : (
        listId?.length === 0 && (
          <>
            <BtnScrapper setIsDataScraperSucces={setIsDataScraperSucces} />
            <ImgNotData />
          </>
        )
      )}
    </div>
  );
};
