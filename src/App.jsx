import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
