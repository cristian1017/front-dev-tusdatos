import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getCookie } from "../utils/utils";

const PrivateRoute = ({ element: Component }) => {
  const token = getCookie("token_access");

  return token ? <Component /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
