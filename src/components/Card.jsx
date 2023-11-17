import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LineChart from "./Charts/LineChart";
import BarChart from "./Charts/BarChart";
import ClusteredBarChart from "./Charts/ClusteredBarChart";
import AccountWatchList from "./Charts/AccountWatchList";
import './Card.css';


function Card({ heading, button, chartType }) {
    const [firstButton, secondButton] = Array.isArray(button) ? button : [];

    return (
        <div className="card">
            <div className="card-header">
                <span>{heading}</span>
                <div className="card-actions">
                    {firstButton &&
                        (chartType === 'ClusteredBarChart' ?
                            <div className="cash-flow-dot">
                                <div className="cash-flow-in-dot" ></div ><span>In</span>
                            </div>
                            :
                            <button>
                                <span>{firstButton}</span>
                                <IoIosArrowDown />
                            </button>)
                    }
                    {secondButton &&
                        (chartType === 'ClusteredBarChart' ?
                            <div className="cash-flow-dot">
                                <div className="cash-flow-out-dot"></div><span>Out</span>
                            </div>
                            :
                            <button>
                                <span>{secondButton}</span>
                                <IoIosArrowDown />
                            </button>)
                    }
                </div>
            </div>
            <div className="border"></div>
            <div className="card-body">
                <LineChart />
            </div>
        </div>
    );
}

export default Card;
