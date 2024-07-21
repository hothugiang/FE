import { Button } from "antd";
import { Link } from "react-router-dom";

const Room = ({ room, hotel }: any) => {
  return (
    <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
      <h1 className="font-bold text-xl mb-3 ml-2">Tên loại phòng</h1>
      <div className="md:grid grid-cols-4 grid-rows-1 gap-4">
        <div className="md:row-span-1 col-span-1">
          <div className="flex-col">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={room.img}
            />
            <div className="flex flex-row mt-3 text-sm lg:text-md">
              <p className="font-bold">Diện tích: &nbsp;</p>
              {room.area}
            </div>
            <p className="font-bold text-sm lg:text-md mt-3">Các tiện ích: </p>
            <div className="grid grid-cols-2 grid-row-1 mb-3 text-sm lg:text-md">
              {room.facilities.map((facility: string, index: number) => (
                <p key={index}>{facility}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-3 row-span-2 overflow-x-auto relative sm:rounded-lg">
          <table className="w-full text-left rtl:text-right dark:text-gray-400 rounded-lg">
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
              {room.room.map((roomType: any) => (
                <tr key={roomType.id} className="hover:bg-gray-200">
                  <th scope="row" className="flex-col">
                    <p className="px-6 pt-4 text-gray text-sm lg:text-lg">
                      {roomType.name}
                    </p>
                    {!roomType.cancelFee && (
                      <p className="px-6 pb-4 text-[#38a638] text-xs">
                        Miễn phí hủy đổi trả
                      </p>
                    )}
                  </th>
                  <td className="px-6 py-4 text-sm lg:text-lg">
                    {roomType.capacity} người
                  </td>
                  <td className="font-bold px-6 py-4 text-sm lg:text-lg text-[#bb6060]">
                    {roomType.price} VND
                  </td>
                  <td>
                    <Link
                      to={`/bookingord/${roomType.id}`}
                      state={{ roomType, room, hotel }}
                    >
                      <Button
                        type="primary"
                        className="bg-[#d65b0f] lg:w-[120px] text-base font-bold h-[40px] flex items-center justify-center text-center"
                      >
                        Chọn
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Room;
