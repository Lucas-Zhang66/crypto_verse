import React, { useState, useEffect } from "react";
import { Button, Avatar, Typography, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  const menuItems = [
    {
      label: <Link to='/'>Home</Link>,
      key: "menu-1",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link>,
      key: "menu-2",
      icon: <FundOutlined />,
    },
    {
      label: <Link to='/news'>News</Link>,
      key: "menu-3",
      icon: <BulbOutlined />,
    },
  ];

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <Menu items={menuItems} theme='dark' />}
    </div>
  );
};

export default Navbar;
