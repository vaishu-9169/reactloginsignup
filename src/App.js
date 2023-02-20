import Header from "./Header/Header";
import CardPro from "../src/CardPro";
import Login from './Login/Login'
import Register from "./Register/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path= "/cardpro" element={<CardPro/>} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
