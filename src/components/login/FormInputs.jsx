import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { AuthService } from "../../services/auth.service";
import Swal from "sweetalert2";
import { setCookie } from "../../utils/utils";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

import "../../styles/components/formInputs.css";
export const FormInputs = () => {
  const authService = new AuthService();
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ username: "", password: "" });
  const [isLoading, setLoading] = useState(false);

  const handleChangeValue = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const [error, resp] = await authService.getAuthLogin(auth);
    if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error?.response?.data?.msg}`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      setLoading(false);
      return;
    }

    setCookie("token_access", resp?.token);
    navigate("/home");
  };

  const isDisabledBtn = Object.values(auth).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="form-container">
      <h1 style={{ color: "#455a64", fontSize: "24px", lineHeight: "36px" }}>
        Tusdatos.co
      </h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="Write your username"
          name="username"
          onChange={handleChangeValue}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          type="password"
          placeholder="Write your password"
          name="password"
          onChange={handleChangeValue}
        />
      </FloatingLabel>
      <Button
        variant="primary"
        disabled={isLoading || !isDisabledBtn}
        className="btn-login"
        onClick={() => handleSubmit()}
      >
        {isLoading ? <Spinner animation="border" /> : "Login"}
      </Button>
    </div>
  );
};
