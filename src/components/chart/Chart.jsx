import "./chart.css";
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
    } from "recharts";

    

    export default function Chart({title,data,dataKey,grid}) {
        
    return (
        <div className="charter">
            <h3 className="chartTitle">{title}</h3>
        <LineChart
        width={1200}
        height={400}
        data={data}
        margin={{
            top: 25,
            right: 60,
        }}
        >
        {grid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="Active "
            stroke="black"
            activeDot={{ r: 8 }}
            name="Advocate"
        />
        <Line type="monotone" 
            dataKey="Users"
            stroke="red"
            activeDot={{ r : 8}}
            />
        </LineChart>
        </div>
    );
}
