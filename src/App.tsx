import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./nav/NavBar";
import HotelDetail from "./page/HotelDetail";
import BookingOrd from "./page/BookingOrd";
import ConfirmOrd from "./page/ConfirmOrd";

export default function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/hoteldetail/:hotelId" Component={HotelDetail} />
          <Route path="/bookingord/:roomId" Component={BookingOrd} />
          <Route path="/confirmord/:roomId" Component={ConfirmOrd} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
