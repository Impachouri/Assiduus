import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

function GroupBarChartCard({ groupData }) {
    const chartRef = useRef(null);
    const [data, setData] = useState(
        [
            { in: 4, out: 6 },
            { in: 8, out: 7 },
            { in: 10, out: 4 },
            { in: 6, out: 8 },
            { in: 7, out: 6 },
            { in: 5, out: 3 },
        ]);
    const labels = ["August", "September", "October", "November", "December", "January"];

    useEffect(() => {
        const width = 500;
        const height = 150;
        const marginTop = 50;
        const marginRight = 20;
        const marginBottom = 40;
        const marginLeft = 10;

        const barWidth = 15;
        const barGap = 15;

        const x = d3.scaleBand()
            .domain([...Array(data.length).keys()])
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => Math.max(d.in, d.out))])
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

        // upper bar
        svg.selectAll("rect.in")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i) + barWidth + barGap)
            .attr("y", d => y(d.in + d.out) + 5) // Shift labels below each bar
            .attr("width", barWidth)
            .attr("height", d => height - marginBottom - y(d.out))
            .attr("fill", "#00b775")
            .attr("rx", 5)
            .attr("ry", 5);

        // Add down bars to the bar chart with rounded corners
        svg.selectAll("rect.out")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i) + barWidth + barGap)
            .attr("y", d => y(d.in) - 5)
            .attr("width", barWidth)
            .attr("height", d => height - marginBottom - y(d.in))
            .attr("fill", "#47b747")
            .attr("rx", 5)
            .attr("ry", 5);



        // Add labels below each bar
        svg.selectAll("text")
            .data(labels)
            .enter()
            .append("text")
            .attr("x", (d, i) => x(i) + barWidth + barGap + barWidth / 2)
            .attr("y", height - marginBottom + 20)
            .text(d => d)
            .attr("text-anchor", "middle")
            .attr("font-size", "13px")
            .attr("fill", "#c6c9cb");

    }, [data, labels]);

    useEffect(() => {
        if (groupData)
            setData(groupData);
    }, [groupData]);

    return (
        <div className="card">
            <div className="card-header">
                <span>Total Cash Flow</span>
                <div className="card-actions">
                    <div className="cash-flow-dot">
                        <div className="cash-flow-in-dot" ></div ><span>In</span>
                    </div>
                    <div className="cash-flow-dot">
                        <div className="cash-flow-out-dot"></div><span>Out</span>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="card-body">
                <div ref={chartRef}></div>
            </div>
        </div>
    );
}

export default GroupBarChartCard;
