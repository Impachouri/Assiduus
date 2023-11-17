import React, { useEffect, useState } from "react";
import './AccountWatchList.css';

function AccountWatchListCard({ accoutData }) {

    const [tableData, setTableData] = useState([
        ['Sales', '1,194.58', '11,418.29'],
        ['Advertising', '6,879.02', '9,271.36'],
        ['Inventory', '4,692.26', '9,768.09'],
        ['Entertainment', '0.00', '0.00'],
        ['Product', '4,652.10', '2,529.90']
    ]);

    const headers = ['Account', 'This Month', 'YTD'];

    useEffect(() => {
        if (accoutData) {
            setTableData(accoutData);
        }
    }, [accoutData]);

    return (
        <div className="card">
            <div className="card-header">
                <span>Account WatchList</span>
            </div>
            <div className="border"></div>
            <div className="card-body">
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AccountWatchListCard;
