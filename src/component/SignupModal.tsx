import { Modal, Input, Button, Radio, Flex, Form } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";

type FormFields = {
  fullName: string;
  phoneNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};

const SignupModal = ({ visible, onCancel, onSignup }: any) => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues: { role: "USER" } });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal open={visible} onCancel={onCancel} footer={null}>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="flex justify-center text-xl font-bold text-gray-900 md:text-2xl">
            Signup
          </h1>

          <Form
            onFinish={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col"
          >
            <div className="flex flex-row gap-x-3">
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
                  onChange={(value) => field.onChange(value)}
                  prefix={<UserOutlined className="pr-2" />}
                  className="mb-6"
                />
              )}
            />

            <div className="flex flex-row gap-x-3">
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
                  onChange={(value) => field.onChange(value)}
                  prefix={<MailOutlined className="pr-2" />}
                  className="mb-6"
                />
              )}
            />

            <div className="flex flex-row gap-x-3">
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
                  onChange={(value) => field.onChange(value)}
                  prefix={<PhoneOutlined className="pr-2" />}
                  className="mb-6"
                />
              )}
            />

            <div className="flex flex-row gap-x-3">
              <label className="font-bold">Password</label>
              {errors.password && (
                <p className="text-red-700">{errors.password.message}</p>
              )}
            </div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Vui lòng nhập mật khẩu",
                minLength: {
                  value: 8,
                  message: "Mật khẩu cần ít nhất 8 kí tự",
                },
              }}
              render={({ field }) => (
                <Input.Password
                  size="large"
                  placeholder="Mật khẩu"
                  onChange={(value) => field.onChange(value)}
                  prefix={<KeyOutlined className="pr-2" />}
                  className="mb-6"
                />
              )}
            />

            <div className="flex flex-row gap-x-3">
              <label className="font-bold">Confirm password</label>
              {errors.confirmPassword && (
                <p className="text-red-700">{errors.confirmPassword.message}</p>
              )}
            </div>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Vui lòng xác nhận mật khẩu",
                validate: (value: string) => {
                  if (value != watch("password")) {
                    return "Mật khẩu không khớp";
                  }
                },
              }}
              render={({ field }) => (
                <Input.Password
                  size="large"
                  placeholder="Nhắc lại mật khẩu"
                  onChange={(value) => field.onChange(value)}
                  prefix={<KeyOutlined className="pr-2" />}
                  className="mb-6"
                />
              )}
            />

            <label className="font-bold">Bạn là?</label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Flex vertical gap="middle">
                  <Radio.Group
                    {...field}
                    defaultValue={"USER"}
                    buttonStyle="solid"
                    className="mb-6 flex flex-row"
                  >
                    <Radio.Button
                      value="USER"
                      className="flex h-9 w-[50%] items-center justify-center"
                    >
                      Khách hàng
                    </Radio.Button>
                    <Radio.Button
                      value="HOTEL_MANAGER"
                      className="flex h-9 w-[50%] items-center justify-center"
                    >
                      Quản lý khách sạn
                    </Radio.Button>
                  </Radio.Group>
                </Flex>
              )}
            />

            <div className="flex flex-row justify-center">
              <p>Đã có tài khoản? </p>
              <p
                className="ml-2 cursor-pointer font-bold text-blue-500 hover:scale-110"
                onClick={onSignup}
              >
                Đăng nhập
              </p>
            </div>

            <div className="mt-4 flex flex-row justify-center">
              <Button
                htmlType="submit"
                type="primary"
                className="mb-3"
                // onClick={onCancel}
              >
                Đăng ký
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default SignupModal;
