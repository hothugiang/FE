import { useState } from "react";
import { Layout, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../assets/stayevrgoe.png";
import ava from "../assets/ava.png";
import LoginModal from "../component/LoginModal";
import SignupModal from "../component/SignupModal";

const { Header } = Layout;

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const showLogin = () => {
    setModalLogin(true);
  };

  const cancelLoginModal = () => {
    setModalLogin(false);
  };

  const showSignup = () => {
    setModalSignup(true);
  };

  const cancelSignupModal = () => {
    setModalSignup(false);
  };

  const switchToSignup = () => {
    cancelLoginModal();
    showSignup();
  };

  const switchToLogin = () => {
    cancelSignupModal();
    showLogin();
  };

  const onLogin = () => {
    setIsLoggedIn(true);
    cancelLoginModal();
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Header className="bg-gray-800 flex justify-center">
      <div className="sm:w-[80%] flex justify-between items-center">
        <a href="/">
          <img className="h-10 w-auto" src={logo} alt="Stayergoe" />
        </a>

        <div className="w-[100%] sm:w-[50%] lg:w-[35%] flex relative">
          <Input
            className="mx-3"
            placeholder="Tìm kiếm"
            suffix={<SearchOutlined />}
          />
          {isLoggedIn ? (
            <>
              <img
                className="h-8 w-8 cursor-pointer rounded-full"
                src={ava}
                alt=""
                onClick={toggleMenu}
              />
              <div
                className={`absolute right-0 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  isMenuOpen ? "block" : "hidden"
                }`}
              >
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 active:font-bold"
                >
                  Profile
                </a>
                <button
                  onClick={logout}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200 active:font-bold"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Button type="primary" onClick={showLogin}>
              Login
            </Button>
          )}
        </div>

        <LoginModal
          visible={modalLogin}
          onCancel={cancelLoginModal}
          onLogin={onLogin}
          onSignup={switchToSignup}
        ></LoginModal>

        <SignupModal
          visible={modalSignup}
          onCancel={cancelSignupModal}
          onSignup={switchToLogin}
        ></SignupModal>
      </div>
    </Header>
  );
}
