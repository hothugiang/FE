import { Modal, Input, Button, Radio, Flex } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const SignupModal = ({ visible, onCancel, onSignup }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="flex justify-center text-xl font-bold text-gray-900 md:text-2xl">
            Signup
          </h1>
          <div className="mt-4 flex flex-col">
            <p>Full name</p>
            <Input
              size="large"
              placeholder="full name"
              onChange={(e) => setFullName(e.target.value)}
              prefix={<UserOutlined className="pr-2" />}
              className="mb-6"
            />
            <p>Email</p>
            <Input
              size="large"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              prefix={<MailOutlined className="pr-2" />}
              className="mb-6"
            />
            <p>Phone number</p>
            <Input
              size="large"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="phone number"
              prefix={<PhoneOutlined className="pr-2" />}
              className="mb-6"
            />
            <p>Password</p>
            <Input.Password
              size="large"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              prefix={<KeyOutlined className="pr-2" />}
              className="mb-6"
            />
            <p>Confirm password</p>
            <Input.Password
              size="large"
              placeholder="confirm password"
              prefix={<KeyOutlined className="pr-2" />}
              className="mb-6"
            />
            <p>Bạn là?</p>
            <Flex vertical gap="middle">
              <Radio.Group
                value={role}
                onChange={(e) => setRole(e.target.value)}
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
          </div>

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
            <Button type="primary" className="mb-3" onClick={onCancel}>
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignupModal;
