import "../../styles/components/header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = `token_access=;path=/;max-age=0;`;
    navigate("/login");
  };
  return (
    <div className="container-header">
      <h1>Tusdatos.co</h1>
      <svg
        onClick={handleLogout}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-box-arrow-in-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
        />
        <path
          fillRule="evenodd"
          d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
        />
      </svg>
    </div>
  );
};
