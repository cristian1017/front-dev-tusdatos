import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useEffect, useState } from "react";
import { ScraperService } from "../../services/scraper.service";
import PropTypes from "prop-types";
import "../../styles/components/btnScraper.css";

export const BtnScrapper = ({ setIsDataScraperSucces }) => {
  const scraperService = new ScraperService();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = async () => {
    setIsLoading(true);
    const [error, resp] = await scraperService.initProcessScraper();
    if (error) {
      setIsLoading(false);
    }

    if (resp) {
      setIsDataScraperSucces(true);
      setIsLoading(false);
      setProgress(100);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isLoading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 95) {
            return prev + 2;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div style={{ padding: "20px" }}>
      {isLoading ? (
        <ProgressBar
          animated
          variant="success"
          now={progress}
          label={`${progress}%`}
        />
      ) : (
        <Button variant="primary" onClick={handleClick}>
          Init Process Scraping
        </Button>
      )}
    </div>
  );
};

BtnScrapper.propTypes = {
  setIsDataScraperSucces: PropTypes.func.isRequired,
};
