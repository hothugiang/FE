import { Input, DatePicker, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import type { GetProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState, useEffect } from "react";

const { RangePicker } = DatePicker;

type RangePickerProps = GetProps<typeof RangePicker>;

type FormFields = {
  fullName: string;
  phoneNumber: number;
  email: string;
  duration: [Dayjs | null, Dayjs | null];
};

export default function BookingOrd() {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, roomType, hotel } = location.state || {};
  const [price, setPrice] = useState<string>("0");
  const [fee, setFee] = useState<string>("0");
  const [total, setTotal] = useState<string>("0");
  const [formData, setFormData] = useState<FormFields | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = (data: FormFields) => {
    console.log("Form Data:", data);
    setFormData(data);
    console.log(formData);
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handleRangeChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      const diffDays = start && end ? end.diff(start, "day") + 1 : 0;
      console.log(`${diffDays} ngày`);
      setValue("duration", dates);

      const str = roomType.price;
      const num = Number(str.replace(/\./g, "")) * diffDays;
      const formattedStr = num.toLocaleString("vi-VN");
      setPrice(formattedStr);

      let serviceFee = "100.000";
      if (!roomType.cancelFee) {
        serviceFee = "0";
      }
      const feenum = Number(serviceFee.replace(/\./g, "")) * diffDays;
      const formattedFee = feenum.toLocaleString("vi-VN");
      setFee(formattedFee);

      const totalNum = num + feenum;
      const formattedTotal = totalNum.toLocaleString("vi-VN");
      setTotal(formattedTotal);
    } else {
      setValue("duration", [null, null]);
    }
  };

  useEffect(() => {
    if (formData) {
      navigate(`/confirmord/${roomType.id}`, {
        state: { roomType, room, hotel, price, fee, total, formData },
      });
    }
  }, [formData, navigate, roomType.id, roomType, room, hotel, price, fee, total]);

  return (
    <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[95%] lg:w-[80%] pb-6 pt-6 lg:pt-10">
        <div className="pb-6 gap-x-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Đặt phòng
          </h1>
          <p>
            Đảm bảo thông tin đặt phòng chính xác trước khi tiến hành thanh toán
          </p>
        </div>

        <div className="lg:grid grid-cols-3 gap-4">
          <div className="lg:col-span-2 lg:grid grid-rows-5">
            {/* Thông tin liên hệ */}
            <div className="lg:row-span-3 bg-white shadow rounded-lg p-6 mb-3">
              <h1 className="font-bold text-lg lg:text-xl mb-4">
                Thông tin liên hệ
              </h1>

              {/* Full Name */}
              <div className="mb-4">
                <div className="flex flex-row gap-x-3 text-sm lg:text-md mb-3">
                  <label className="font-bold">Họ và tên</label>
                  {errors.fullName && (
                    <p className="text-red-700">{errors.fullName.message}</p>
                  )}
                </div>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: "Vui lòng nhập tên" }}
                  render={({ field }) => (
                    <Input
                      size="large"
                      placeholder="Họ và tên"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <div className="flex flex-row gap-x-3 text-sm lg:text-md mb-3">
                  <label className="font-bold">Số điện thoại</label>
                  {errors.phoneNumber && (
                    <p className="text-red-700">{errors.phoneNumber.message}</p>
                  )}
                </div>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required: "Vui lòng nhập số điện thoại",
                    pattern: {
                      value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                      message: "Vui lòng nhập số điện thoại hợp lệ",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      size="large"
                      placeholder="Số điện thoại"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <div className="flex flex-row gap-x-3 text-sm lg:text-md mb-3">
                  <label className="font-bold">Email</label>
                  {errors.email && (
                    <p className="text-red-700">{errors.email.message}</p>
                  )}
                </div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Vui lòng nhập email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Vui lòng nhập email hợp lệ",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      size="large"
                      placeholder="Email"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />
              </div>
            </div>

            {/* Chi tiết giá */}
            <div className="lg:row-span-2 bg-white shadow rounded-lg p-6">
              <h1 className="font-bold text-lg lg:text-xl mb-4">
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

          {/* Thông tin phòng */}
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

            {/* Range Picker */}
            <div className="mb-3 text-sm lg:text-md">
              <div className="flex flex-row gap-x-3">
                <label className="font-bold mb-3">Thời gian:</label>
                {errors.duration && (
                  <p className="text-red-700">{errors.duration.message}</p>
                )}
              </div>
              <Controller
                name="duration"
                control={control}
                // defaultValue={[null, null]}
                rules={{ required: "Vui lòng chọn ngày" }}
                render={({ field: { onBlur, value, ref } }) => (
                  <RangePicker
                    {...{
                      onChange: (dates) => {
                        handleRangeChange(dates);
                      },
                      onBlur,
                      value: value
                        ? [
                            dayjs(value[0] || undefined),
                            dayjs(value[1] || undefined),
                          ]
                        : [null, null],
                      ref,
                    }}
                    disabledDate={disabledDate}
                    className="w-full"
                    format="YYYY-MM-DD"
                  />
                )}
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
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#d65b0f] text-white"
          >
            Đặt phòng
          </Button>
        </div>
      </div>
    </form>
  );
}
