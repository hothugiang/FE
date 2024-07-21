import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EnvironmentFilled, SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker } from "antd";
import Room from "../component/Room";

const { RangePicker } = DatePicker;

export default function HotelDetail() {
  const [data, setData] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const location = useLocation();
  const hotel = location.state.hotel;

  useEffect(() => {
    fetch("/hotel_room.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        
        const filterRoomList = data.filter((room: any) => room.hotelId === hotel.id)
        setRoomList(filterRoomList);
      })
      .catch((error) => {
        console.error("Lỗi lấy data:", error);
      });
  }, []);

  const scrollToEmptyRooms = () => {
    const emptyRoomsSection = document.getElementById("emptyRooms");
    if (emptyRoomsSection) {
      emptyRoomsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex-col w-[95%] lg:w-[80%]">
        <div className="flex justify-between my-7">
          <div>
            <h1 className="font-bold text-xl lg:text-2xl">{hotel.name}</h1>
            <p className="mb-2 text-gray-700 dark:text-gray-600 mt-6">
              <EnvironmentFilled /> {hotel.location}
            </p>
          </div>
          <div className="ml-auto text-right">
            <h1>Giá/phòng/đêm/từ</h1>
            <h1 className="font-bold text-lg lg:text-2xl text-[#bb6060]">
              {hotel.minPrice} VND
            </h1>
            <Button
              type="primary"
              className="bg-[#d65b0f] w-[150px] lg:w-[240px] mt-3 text-md lg:text-xl h-[40px]"
              onClick={scrollToEmptyRooms}
            >
              {" "}
              Chọn phòng
            </Button>
          </div>
        </div>
        <div className="max-w-[100%] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-6">
          <div className="grid grid-cols-1 justify-center lg:grid-cols-3">
            <div className="lg:col-span-1">
              <img
                src={hotel.img}
                className="h-full w-full lg:rounded-l-lg"
              ></img>
            </div>
            <div className="lg:col-span-2 p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                Giới thiệu
              </h5>
              <p className="font-normal text-black">{hotel.discription}</p>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <h1 id="emptyRooms" className="font-bold text-2xl mb-3">
            Các loại phòng còn trống
          </h1>
          <p>Bạn muốn đặt phòng vào thời gian nào?</p>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-center">
            <div className="w-3/4">
              <RangePicker className="w-full" />
            </div>
            <div className="w-1/4 ml-2">
              <Button
                type="primary"
                icon={<SearchOutlined />}
                className="w-full text-xs lg:text-sm"
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
        {(roomList.length > 0) ? (roomList.map((hotelRoom: any) => (
          <div key={hotelRoom.id}>
            <Room room={hotelRoom} hotel={hotel.name}></Room>
          </div>
        ))) : (
          <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
            Không có phòng trống
          </div>
        )}
      </div>
    </div>
  );
}
