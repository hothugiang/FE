import { useLocation } from "react-router-dom";
import { EnvironmentFilled, SearchOutlined } from "@ant-design/icons";
import { Button, Space, DatePicker } from "antd";
import room1 from "../assets/room1.webp";

const { RangePicker } = DatePicker;

export default function HotelDetail() {
  const location = useLocation();
  const hotel = location.state.hotel;

  return (
    <div className="flex justify-center">
      <div className="flex-col w-[80%]">
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
              //   onClick={scrollToEmptyRooms}
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

        <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
          {/* <h1 className="font-bold text-xl mb-3 ml-2">Tên loại phòng</h1>
          <div className="grid grid-cols-4 grid-rows-1 gap-4">
            <div className="row-span-1 col-span-1">
              <div className="flex-col">
                <img
                  className="rounded-lg object-cover w-full h-full"
                  src={room1}
                />
                <div className="grid grid-cols-2 grid-row-1 mt-3">
                  Các loại tiện ích
                </div>
              </div>
            </div>
            <div className=" col-span-3 row-span-2 overflow-x-auto relative sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400 rounded-lg">
                <thead className="text-xs text-black uppercase bg-white">
                  <tr className="bg-gray-100">
                    <th scope="col" className="px-6 py-4">
                      Lựa chọn phòng
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sức chứa
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Giá/Phòng/Ngày
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-200">
                    <th scope="row" className="flex-col">
                      <p className="px-6 pt-4 font-medium text-gray text-xs">
                        Superior - Single Bed
                      </p>
                      <p className="px-6 py-4 font-medium text-black text-xs">
                        Gồm bữa sáng
                      </p>
                      <p className="px-6 pb-4 font-medium text-[#38a638] text-xs">
                        Miễn phí hủy đổi trả
                      </p>
                    </th>
                    <td className="px-6 py-4">2 người</td>
                    <td className="font-bold px-6 py-4 text-l text-[#bb6060]">
                      1.349.206 VND
                    </td>
                    <td>
                      <Button
                        type="primary"
                        className="bg-[#d65b0f] w-[120px] mt-3 text-base font-bold h-[40px] flex items-center justify-center text-center"
                        href="/payment"
                      >
                        Chọn
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-200">
                    <th scope="row" className="flex-col">
                      <p className="px-6 pt-4 font-medium text-gray text-xs">
                        Superior Double - Twin
                      </p>
                      <p className="px-6 py-4 font-medium text-black text-xs">
                        2 giường đôi
                      </p>
                      <p className="px-6 pb-4 font-medium text-[#38a638] text-xs">
                        Miễn phí hủy đổi trả
                      </p>
                    </th>
                    <td className="px-6 py-4">4 người</td>
                    <td className="font-bold px-6 py-4 text-l text-[#bb6060]">
                      1.849.206 VND
                    </td>
                    <td>
                      <Button
                        type="primary"
                        className="bg-[#d65b0f] w-[120px] mt-3 text-base font-bold h-[40px] flex items-center justify-center text-center"
                        href="/payment"
                      >
                        Chọn
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
