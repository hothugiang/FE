import { DatePicker, Button } from "antd";

const { RangePicker } = DatePicker;

export default function ConfirmOrd() {
  return (
    <div className="flex justify-center">
      <div className="w-[95%] lg:w-[80%] pb-6 pt-6 lg:pt-10">
        <div className="pb-6 gap-x-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Thanh toán
          </h1>
          <p>
            Đơn đặt phòng còn 3 ngày nữa đến hạn thanh toán
          </p>
        </div>

        <div className="lg:grid grid-cols-3 gap-4">
          <div className="lg:col-span-2 lg:grid grid-rows-5">
            <div className="lg:row-span-2 bg-white shadow rounded-lg p-6 mb-3 lg:grid grid-cols-2">
              <div className="lg:col-span-1">
                <h1 className="font-bold text-lg lg:text-xl mb-4">
                  Thông tin liên hệ
                </h1>
                <div className="flex flex-row mb-3 text-sm lg:text-md">
                  <p className="font-bold">Họ và tên: &nbsp;</p>
                  <p>Giá phòng</p>
                </div>
                <div className="flex flex-row mb-3 text-sm lg:text-md">
                  <p className="font-bold">Số điện thoại: &nbsp;</p>
                  <p>Phí</p>
                </div>
                <div className="flex flex-row mb-3 text-sm lg:text-md">
                  <p className="font-bold">Email: &nbsp;</p>
                  <p>Phí</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <h1 className="font-bold text-lg lg:text-xl mb-4">
                  Chi tiết giá
                </h1>
                <div className="flex flex-row justify-between mb-3 text-sm lg:text-md">
                  <p className="font-bold">Tổng giá phòng:</p>
                  <p>Giá phòng</p>
                </div>
                <div className="flex flex-row justify-between mb-3 text-sm lg:text-md">
                  <p className="font-bold">Phí dịch vụ:</p>
                  <p>Phí</p>
                </div>
                <div className="flex flex-row justify-between mb-3 text-sm lg:text-md">
                  <p className="font-bold">Tổng:</p>
                  <p className="text-[#bb6060] font-bold">Phí</p>
                </div>
              </div>
            </div>

            <div className="lg:row-span-3 bg-white shadow rounded-lg p-6">
              <div className="lg:grid grid-cols-2">
                <div className="lg:col-span-1">
                  <h1 className="font-bold text-lg lg:text-xl mb-4">
                    Thông tin thanh toán
                  </h1>

                  <div className="flex flex-row mb-3 text-sm lg:text-md">
                    <p className="font-bold">Số tài khoản thụ hưởng: &nbsp;</p>
                    <p>STK</p>
                  </div>
                  <div className="flex flex-row mb-3 text-sm lg:text-md">
                    <p className="font-bold">Tên ngân hàng: &nbsp;</p>
                    <p>Bank</p>
                  </div>
                  <div className="flex flex-row mb-3 text-sm lg:text-md">
                    <p className="font-bold">Người thụ hưởng: &nbsp;</p>
                    <p>Tên người nhận</p>
                  </div>
                  <div className="flex flex-row mb-3 text-sm lg:text-md">
                    <p className="font-bold">Số tiền: &nbsp;</p>
                    <p>Phí</p>
                  </div>
                  <div className="flex flex-row mb-3 text-sm lg:text-md">
                    <p className="font-bold">Nội dung chuyển khoản: &nbsp;</p>
                    <p>Mã giao dịch</p>
                  </div>
                  <div className="flex text-sm lg:text-md justify-center text-center px-5">
                    Sau khi thanh toán, vui lòng chờ 3-5 phút để hệ thống xử lý
                    thông tin
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <h1 className="font-bold text-lg lg:text-xl mb-4">
                    QR thanh toán
                  </h1>

                  <div className="flex text-sm lg:text-md justify-center text-center px-5">
                    QR có hiệu lực trong 15 phút
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 lg:col-span-1 mt-3 lg:mt-0">
            <h1 className="font-bold text-lg lg:text-xl mb-4 lg:flex justify-center">
              Thông tin phòng
            </h1>
            <div className="flex flex-row mb-3 text-sm lg:text-md">
              <p className="font-bold">Tên khách sạn: &nbsp;</p>
              <p>Tên</p>
            </div>
            <div className="flex flex-row mb-3 text-sm lg:text-md">
              <p className="font-bold">Tên phòng: &nbsp;</p>
              <p>Phòng</p>
            </div>

            <div className="mb-3">
              <p className="font-bold mb-3 text-sm lg:text-md">Thời gian: </p>
              <RangePicker disabled className="w-full" />
            </div>

            <img
              className="rounded-lg object-cover w-full"
              // src={room.img}
            />
            <div className="flex flex-row mt-3 text-sm lg:text-md">
              <p className="font-bold">Diện tích: &nbsp;</p>
              {/* {room.area} */}
            </div>
            <p className="font-bold mt-3 text-sm lg:text-md">Các tiện ích: </p>
            <div className="grid grid-cols-2 grid-row-1 mb-3 text-sm lg:text-md">
              {/* {room.facilities.map((facilities: string) => (
                <p>{facilities}</p>
              ))} */}
            </div>

            <div className="flex flex-row mb-3 text-sm lg:text-md">
              <p className="font-bold">Đơn giá: &nbsp;</p>
              <p className="text-[#bb6060] font-bold">Giá VND/ngày</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <Button type="primary">
            Huỷ
          </Button>
        </div>
      </div>
    </div>
  );
}
