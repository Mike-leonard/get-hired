import React from 'react';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        no: "A-01",
        name: "Simple HTML",
        marks: 60,
        gotMarks: 60,
    },
    {
        no: "A-02",
        name: "HTML 5",
        marks: 60,
        gotMarks: 60,
    },
    {
        no: "A-03",
        name: "HTML & CSS",
        marks: 60,
        gotMarks: 60,
        amt: 2290
    },
    {
        no: "A-04",
        name: "Responsive Design",
        marks: 60,
        gotMarks: 60,
    },
    {
        no: "A-05",
        name: "CSS Frameworks",
        marks: 60,
        gotMarks: 60,
    },
    {
        no: "A-06",
        name: "JavaScript",
        marks: 60,
        gotMarks: 60,
    },
    {
        no: "A-07",
        name: "Modern JS",
        marks: 60,
        gotMarks: 60,
    },
    {
        no: "A-08",
        name: "React",
        marks: 60,
        gotMarks: 60,
    }
];

const formatTooltip = (value, name, props) => {
    if (name === 'gotMarks') {
        return `${value} on ${props.payload.name} `;
    }
};

const Statistics = () => {
    return (
        <div className='p-5 my-4 flex flex-col items-center'>
            <h1 className='text-xl font-bold my-5'>Assignment Analytics</h1>

            <AreaChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="no" />
                <YAxis />
                <Tooltip formatter={formatTooltip} />
                <Area type="monotone" dataKey="gotMarks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;