import { useState } from "react";
import { Modal, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";


const LoginModal = ({ visible, onCancel, onLogin, onSignup }: any) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="flex justify-center text-xl font-bold text-gray-900 md:text-2xl">
            Login
          </h1>
          <div className="mt-4 flex flex-col">
            <p>Email</p>
            <Input
              size="large"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              prefix={<UserOutlined className="pr-2" />}
              className="mb-6"
            />
            <p>Password</p>
            <Input.Password
              size="large"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              prefix={<KeyOutlined className="pr-2" />}
              className="mb-6"
            />
          </div>

          <div className="flex flex-row justify-center">
            <p>Chưa có tài khoản? </p>
            <p
              className="ml-2 cursor-pointer font-bold text-blue-500 hover:scale-110"
              onClick={onSignup}
            >
              {" "}
              Đăng ký{" "}
            </p>
          </div>

          <div className="mt-4 flex flex-row justify-center">
            <Button type="primary" className="mb-3" onClick={onLogin}>
              Đăng nhập
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
