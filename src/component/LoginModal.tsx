import { Modal, Input, Button, Form } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

const LoginModal = ({ visible, onCancel, onLogin, onSignup }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal open={visible} onCancel={onCancel} footer={null}>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="flex justify-center text-xl font-bold text-gray-900 md:text-2xl">
            Login
          </h1>

          <Form
            onFinish={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col"
          >
            <div className="mb-6">
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
                    value={field.value}
                    placeholder="Email"
                    prefix={<UserOutlined className="pr-2" />}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </div>

            <div className="mb-6">
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
                  required: "Cần nhập password",
                  minLength: {
                    value: 8,
                    message: "Mật khẩu có độ dài tối thiếu 8 ký tự",
                  },
                }}
                render={({ field }) => (
                  <Input.Password
                    size="large"
                    value={field.value}
                    placeholder="Password"
                    prefix={<KeyOutlined className="pr-2" />}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </div>

            <div className="flex flex-row justify-center">
              <p>Chưa có tài khoản? </p>
              <p
                className="ml-2 cursor-pointer font-bold text-blue-500 hover:scale-110"
                onClick={onSignup}
              >
                Đăng ký
              </p>
            </div>

            <div className="mt-4 flex flex-row justify-center">
              <Button
                type="primary"
                className="mb-3"
                htmlType="submit"
                onClick={onLogin}
              >
                Đăng nhập
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
