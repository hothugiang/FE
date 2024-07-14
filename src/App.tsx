import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./nav/NavBar";
import HotelDetail from "./page/HotelDetail";

export default function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/hoteldetail/:hotelId" element={<HotelDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
