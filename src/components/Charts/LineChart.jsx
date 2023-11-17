import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as d3 from "d3";
import jsonData from "./data.json";

function LineChartCard({ linearData }) {
    const chartRef = useRef(null);
    const [data, setData] = useState(jsonData["january"]);
    const [selectedMonth, setSelectedMonth] = useState("January");

    const getMonthData = (month) => {
        return jsonData[month.toLowerCase()] || [];
    };


    const updateChart = () => {
        const width = 500;
        const height = 150;
        const marginTop = 20;
        const marginRight = 20;
        const marginBottom = 30;
        const marginLeft = 20;

        const x = d3.scaleLinear().domain([9, 18]).range([marginLeft, width - marginRight]);
        const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.ypoint)]).range([height - marginBottom, marginTop]);

        const line = d3.line()
            .x((d) => x(d.xpoint))
            .y((d) => y(d.ypoint))
            .curve(d3.curveBasis);

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

        // Hide the axis line and ticks
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call((g) => g.selectAll(".domain, .tick line").remove())
            .selectAll(".tick text")
            .attr("dy", "0.5em"); // Adjust the vertical position of tick labels

        // Add custom tick labels
        x.ticks().forEach((tick) => {
            svg.append("text")
                .attr("x", x(tick))
                .attr("y", height - marginBottom / 2)
                .attr("dy", "0.5em")
                .attr("text-anchor", "middle")
                .attr("fill", "#c6c9cb")
                .text(tick);
        });

        svg.append("path")
            .attr("fill", "none")
            .attr("stroke", "#58b865")
            .attr("stroke-width", 3)
            .attr("d", line(data));
    };


    function generateData(month) {
        const monthData = Array.from({ length: 10 }, (_, index) => ({
            xpoint: 9 + index,
            ypoint: Math.floor(Math.random() * 30) + 10,
        }));
        return monthData;
    }

    useEffect(() => {
        updateChart();
    }, [data, selectedMonth]);

    useEffect(() => {
        setData(linearData);
    }, [linearData])

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        setData(getMonthData(selectedMonth));
    };

    const handleManageClick = () => {
        const newData = generateData(selectedMonth);
        setData(newData);
    }

    return (
        <div className="card">
            <div className="card-header">
                <span>Checking Account</span>
                <div className="card-actions">
                    <button onClick={handleManageClick}>
                        <span>Manage</span>
                        <IoIosArrowDown />
                    </button>
                    <select value={selectedMonth} onChange={handleMonthChange}>
                        {Object.keys(jsonData).map((month) => (
                            <option key={month} value={month}>
                                {month.charAt(0).toUpperCase() + month.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="border"></div>
            <div className="card-body">
                <div ref={chartRef}></div>
            </div>
        </div>
    );
}

export default LineChartCard;
