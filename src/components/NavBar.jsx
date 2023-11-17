import { IoMdNotifications } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import './NavBar.css'

function NavBar({ activeTab, setLineardata, setBardata, setGroupdata, setAccountdata }) {


    function generateLinearData() {
        const monthData = Array.from({ length: 10 }, (_, index) => ({
            xpoint: 9 + index,
            ypoint: Math.floor(Math.random() * 30) + 10,
        }));
        return monthData;
    }

    function generateBarData() {
        const randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20));
        return randomArray;
    }

    function generateGroupData() {
        const randomData = Array.from({ length: 6 }, () => ({
            in: Math.floor(Math.random() * 10),
            out: Math.floor(Math.random() * 10),
        }));
        return randomData;
    }

    function generateAccountData() {
        const categories = ['Sales', 'Advertising', 'Inventory', 'Entertainment', 'Product'];

        const tableData = categories.map(category => {
            const value1 = (Math.random() * 10000).toFixed(2);
            const value2 = (Math.random() * 10000).toFixed(2);

            return [category, value1, value2];
        });

        return tableData;

    }

    const handleRandomziedData = () => {

        setLineardata(generateLinearData());
        setBardata(generateBarData());
        setGroupdata(generateGroupData());
        setAccountdata(generateAccountData());
    }

    return (
        <div className="nav-bar">
            {activeTab === 'dashboard' && <button className="randomized-data" onClick={handleRandomziedData}> Randomized Data</button>}
            <div className="account-section">
                <AiOutlineSearch id="icon" />
                <input type="text" />
                <div className="notification-icon">
                    <IoMdNotifications className="notification-bell" />
                    <div className="notification-dot"></div>
                </div>
                <img src="./aman.jpg" />
                <BiSolidDownArrow className="account-dropdown" />
            </div>
        </div>
    );

}

export default NavBar;