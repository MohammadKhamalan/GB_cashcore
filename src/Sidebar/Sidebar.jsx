import React, { useState } from 'react';

import "./Sidebar.scss";
import { Link ,Outlet} from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import TransferWithinAStationOutlinedIcon from '@mui/icons-material/TransferWithinAStationOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import logoImage from '../images/logo1.png'; // Adjust the path based on the folder structure

const Sidebar = ({ setShowWaiting,setShowProducts,setShowAccounts }) => {
    const handleSetShowWaiting = () => {
      setShowWaiting(true);
    };
    const handleshowproducts = () => {
        setShowProducts(true);
      };
      const handleshowaccounts = () => {
        setShowAccounts(true);
      };
    return (
        <>
        <div className="sidebar">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <HomeOutlinedIcon />
                    <span>Home</span>
                </li>
                 <li className="sidebar__item">
                 <Link to="Accounts" onClick={handleshowaccounts}>

                    <AccountBoxOutlinedIcon />
                    <span>Accounts</span>
                    </Link>

                </li>
                <li className="sidebar__item">
                    <CalendarMonthOutlinedIcon />
                    <span>Visits</span>
                </li>
                <li className="sidebar__item">
                    <ChatBubbleOutlineOutlinedIcon />
                    <span>Chat</span>
                </li>
                <li className="sidebar__item">
                    <AddPhotoAlternateOutlinedIcon />
                    <span>Post</span>
                </li> <li className="sidebar__item">
                <Link to="Products" onClick={handleshowproducts}>

                    <ProductionQuantityLimitsOutlinedIcon />
                    <span>Products</span>
                    </Link>
                </li> <li className="sidebar__item">
                    <TransferWithinAStationOutlinedIcon />
                    <span>Transaction</span>
                    </li>
               
                <li className="sidebar__item">
                <Link to="waiting" onClick={handleSetShowWaiting}>
                <HourglassBottomOutlinedIcon/>
                <span>Waiting Accounts</span>
                </Link>


                </li>
                <li className="sidebar__item">
                    <EmojiEventsOutlinedIcon />
                    <span>Prizes</span>
                </li> <li className="sidebar__item">
                    <AccountBalanceOutlinedIcon />
                    <span>Branches</span>
                </li>
                <li className="sidebar__item">
                <DescriptionOutlinedIcon/>
                    <span>Invoices</span>
                </li>
                <li className="sidebar__item">
                    <SettingsOutlinedIcon />
                    <span>Settings</span>
                </li>
                <img src={logoImage} alt="Logo" className="logo" />
            </ul>
        </div>
        <Outlet/>
</>
    );
};

export default Sidebar;