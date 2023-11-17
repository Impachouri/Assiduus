import React, { useState } from "react";
import './SideBar.css';
import { MdAccountBalanceWallet, MdContacts } from "react-icons/md";
import { BiDollar, BiSolidReport, BiSolidDashboard } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

function SideBar({ activeTab, setActiveTab }) {


    const handleTabClick = (tab) => {
        console.log(tab)
        setActiveTab(tab);
    };

    return (
        <div className="side-bar">
            <div className="logo-container">
                <img className="logo" src="./download.png" alt="Logo" />
            </div>
            <div className="links">
                <a href="#" className={`link ${activeTab === "dashboard" ? "active" : ""}`} onClick={() => handleTabClick("dashboard")}>
                    <BiSolidDashboard />
                    <span className="link-text">Dashboard</span>
                </a>
                <a href="#" className={`link ${activeTab === "accounts" ? "active" : ""}`} onClick={() => handleTabClick("accounts")}>
                    <MdAccountBalanceWallet />
                    <span className="link-text">Accounts</span>
                </a>
                <a href="#" className={`link ${activeTab === "payrolls" ? "active" : ""}`} onClick={() => handleTabClick("payrolls")}>
                    <BiDollar />
                    <span className="link-text">Payrolls</span>
                </a>
                <a href="#" className={`link ${activeTab === "reports" ? "active" : ""}`} onClick={() => handleTabClick("reports")}>
                    <BiSolidReport />
                    <span className="link-text">Reports</span>
                </a>
                <a href="#" className={`link ${activeTab === "advisor" ? "active" : ""}`} onClick={() => handleTabClick("advisor")}>
                    <BsFillPersonFill />
                    <span className="link-text">Advisor</span>
                </a>
                <a href="#" className={`link ${activeTab === "contacts" ? "active" : ""}`} onClick={() => handleTabClick("contacts")}>
                    <MdContacts />
                    <span className="link-text">Contacts</span>
                </a>
            </div>
        </div>
    );
}

export default SideBar;
