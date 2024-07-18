import { Button } from "antd";

const Room = ({ room }: any) => {
  return (
    <div className="block max-w-[100%] p-6 bg-white border border-gray-200 rounded-lg shadow my-6">
      <h1 className="font-bold text-xl mb-3 ml-2">Tên loại phòng</h1>
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        <div className="row-span-1 col-span-1">
          <div className="flex-col">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={room.img}
            />
            <p className="text-sm">Diện tích: {room.area}</p>
            <p className="font-bold text-sm mt-3">Các tiện tích</p>
            <div className="flex flex-col text-sm lg:grid lg:grid-cols-2 lg:grid-row-1">
              {room.facilities.map((facilities: string) => (
                <p>{facilities}</p>
              ))}
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
              {room.room.map((room: any) => (
                <tr className="hover:bg-gray-200">
                  <th scope="row" className="flex-col">
                    <p className="px-6 pt-4 font-medium text-gray text-xs">
                      {room.name}
                    </p>
                    {!room.cancelFee && (
                      <p className="px-6 pb-4 font-medium text-[#38a638] text-xs">
                        Miễn phí hủy đổi trả
                      </p>
                    )}
                  </th>
                  <td className="px-6 py-4">{room.capacity} người</td>
                  <td className="font-bold px-6 py-4 text-l text-[#bb6060]">
                    {room.price} VND
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Room;
