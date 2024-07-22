import { DatePicker, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import qr from "../assets/qr_code.svg";

const { RangePicker } = DatePicker;

export default function ConfirmOrd() {
  const location = useLocation();
  const navigate = useNavigate();

  const { room, roomType, hotel, price, fee, total, formData } =
    location.state || {};

  console.log(formData.duration);

  const defaultDuration: [Dayjs | null, Dayjs | null] = [
    formData?.duration?.[0] ? dayjs(formData.duration[0].$d) : null,
    formData?.duration?.[1] ? dayjs(formData.duration[1].$d) : null,
  ];

  const cancelBtn = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[95%] lg:w-[80%] pb-6 pt-6 lg:pt-10">
        <div className="pb-6 gap-x-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Thanh toán
          </h1>
          <p>Đơn đặt phòng còn 3 ngày nữa đến hạn thanh toán</p>
        </div>

        <div className="lg:grid grid-cols-3 gap-4">
          <div className="lg:col-span-2 lg:grid grid-rows-3">
            <div className="lg:row-span-1 bg-white shadow rounded-lg p-6 mb-3 lg:grid grid-cols-2">
              <div className="lg:col-span-1">
                <h1 className="font-bold text-lg lg:text-xl mb-4">
                  Thông tin liên hệ
                </h1>
                <div className="flex flex-row mb-4 text-sm lg:text-md">
                  <p className="font-bold">Họ và tên: &nbsp;</p>
                  <p>{formData.fullName}</p>
                </div>
                <div className="flex flex-row mb-4 text-sm lg:text-md">
                  <p className="font-bold">Số điện thoại: &nbsp;</p>
                  <p>{formData.phoneNumber}</p>
                </div>
                <div className="flex flex-row text-sm lg:text-md">
                  <p className="font-bold">Email: &nbsp;</p>
                  <p>{formData.email}</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <h1 className="font-bold text-lg lg:text-xl my-4 lg:mt-0">
                  Chi tiết giá
                </h1>
                <div className="flex flex-row justify-between mb-4 text-sm lg:text-md">
                  <p className="font-bold">Tổng giá phòng:</p>
                  <p>{price}</p>
                </div>
                <div className="flex flex-row justify-between mb-4 text-sm lg:text-md">
                  <p className="font-bold">Phí dịch vụ:</p>
                  <p>{fee}</p>
                </div>
                <div className="flex flex-row justify-between text-sm lg:text-md">
                  <p className="font-bold">Tổng:</p>
                  <p className="text-[#bb6060] font-bold">{total}</p>
                </div>
              </div>
            </div>

            <div className="lg:row-span-2 bg-white shadow rounded-lg p-6 lg:grid grid-cols-2">
              <div className="lg:col-span-1">
                <h1 className="font-bold text-lg lg:text-xl mb-4">
                  Thông tin thanh toán
                </h1>

                <div className="flex flex-row mb-4 text-sm lg:text-md">
                  <p className="font-bold">Số tài khoản thụ hưởng: &nbsp;</p>
                  <p>0397xxxxxxx</p>
                </div>
                <div className="flex flex-row mb-4 text-sm lg:text-md">
                  <p className="font-bold">Tên ngân hàng: &nbsp;</p>
                  <p>xxx Bank</p>
                </div>
                <div className="flex flex-row mb-4 text-sm lg:text-md">
                  <p className="font-bold">Người thụ hưởng: &nbsp;</p>
                  <p>HE THONG DAT PHONG KHACH SAN</p>
                </div>
                <div className="flex flex-row mb-4 text-sm lg:text-md">
                  <p className="font-bold">Số tiền: &nbsp;</p>
                  <p>{total}</p>
                </div>
                <div className="flex flex-row mb-4 text-sm lg:text-md">
                  <p className="font-bold">Nội dung chuyển khoản: &nbsp;</p>
                  <p>booking ord id</p>
                </div>
                <div className="flex text-sm lg:text-md justify-center text-center px-5 mb-4">
                  Sau khi thanh toán, vui lòng chờ 3-5 phút để hệ thống xử lý
                  thông tin
                </div>
              </div>
              <div className="lg:col-span-1">
                <h1 className="font-bold text-lg lg:text-xl">QR thanh toán</h1>

                <div className="flex justify-center h-[60%]">
                  <img src={qr} />
                </div>

                <div className="flex text-sm lg:text-md justify-center text-center px-5">
                  QR có hiệu lực trong 15 phút
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 lg:col-span-1 mt-3 lg:mt-0">
            <h1 className="font-bold text-lg lg:text-xl mb-4 lg:flex justify-center">
              Thông tin phòng
            </h1>
            <div className="flex flex-row mb-3 text-sm lg:text-md">
              <p className="font-bold">Tên khách sạn: &nbsp; </p>
              <p>{hotel}</p>
            </div>
            <div className="flex flex-row mb-3 text-sm lg:text-md">
              <p className="font-bold">Tên phòng: &nbsp; </p>
              <p>{roomType.name}</p>
            </div>

            <div className="mb-3">
              <p className="font-bold mb-3 text-sm lg:text-md">Thời gian: </p>
              <RangePicker
                defaultValue={defaultDuration}
                disabled
                className="w-full"
              />
            </div>

            <img
              className="rounded-lg object-cover w-full h-[40%]"
              src={room.img}
            />
            <div className="flex flex-row mt-3 text-sm lg:text-md">
              <p className="font-bold">Diện tích: &nbsp;</p>
              {roomType.area} m2
            </div>
            <p className="font-bold text-sm lg:text-md mt-3">Các tiện ích: </p>
            <div className="grid grid-cols-2 grid-row-1 mb-3 text-sm lg:text-md">
              {room.facilities.map((facility: string, index: number) => (
                <p key={index}>{facility}</p>
              ))}
            </div>

            <div className="flex flex-row text-sm lg:text-md">
              <p className="font-bold">Đơn giá: &nbsp;</p>
              <p className="text-[#bb6060] font-bold">
                {roomType.price} VND/ngày
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <Button type="primary" onClick={cancelBtn}>
            Huỷ
          </Button>
        </div>
      </div>
    </div>
  );
}
