import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

function BarChartCard({ barData }) {
    const chartRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([5, 10, 14, 12, 13, 8])

    useEffect(() => {
        const width = 500;
        const height = 150;
        const marginTop = 20;
        const marginRight = 20;
        const marginBottom = 40;
        const marginLeft = 10;

        const x = d3.scaleBand()
            .domain([...Array(6).keys()])
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height - marginBottom, marginTop]);

        const existingSvg = d3.select(chartRef.current).select("svg");
        if (!existingSvg.empty()) {
            existingSvg.remove();
        }

        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        // Add bars to the bar chart with rounded corners
        svg.selectAll("rect")
            .data([5, 10, 14, 12, 13, 8])
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i) + 15 + 15) // Adjust x position based on bar width and gap
            .attr("y", (d) => y(d) + 5) // Shift labels below each bar
            .attr("width", 15)
            .attr("height", (d) => height - marginBottom - y(d))
            .attr("fill", "#47b747")
            .attr("rx", 5)
            .attr("ry", 5);

        // Add labels below each bar
        svg.selectAll("text")
            .data(["older", "Jan 1-8", "Jan 9-16", "Jan 17-24", "Jan 25-31", "future"])
            .enter()
            .append("text")
            .attr("x", (d, i) => x(i) + 15 + 15 + 15 / 2)
            .attr("y", height - marginBottom + 20)
            .text((d) => d)
            .attr("text-anchor", "middle")
            .attr("font-size", "13px")
            .attr("fill", "#c6c9cb");
    }, [data]);

    useEffect(() => {
        if (barData)
            setData(barData)
    }, [barData]);


    const handleNewInvoiceClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    return (
        <div className="card">
            <div className="card-header">
                <span>Invoices owed to you</span>
                <div className="card-actions">
                    <button id="new-sales-invoice-button" onClick={handleNewInvoiceClick}>
                        <span>New Sales Invoice</span>
                    </button>
                </div>
            </div>
            <div className="border"></div>
            <div className="card-body">
                <div ref={chartRef}></div>
            </div>
            {showModal && (
                <>
                    <div className="modal-overlay"></div>
                    <div className="modal">
                        <div className="modal-content">
                            <h2>File Upload</h2>
                            <form onSubmit={handleFormSubmit}>
                                <label>
                                    Item:
                                    <input type="text" name="field1" />
                                </label>
                                <label>
                                    Date:
                                    <input type="text" name="field2" />
                                </label>
                                <label>
                                    Choose File:
                                    <input type="file" name="file" />
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default BarChartCard;
