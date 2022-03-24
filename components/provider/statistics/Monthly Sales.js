import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' ,
        },
        title: {
            display: true,
            text: 'Monthly sales',
        },
    },
};

const labels = ['February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            lineTension: 0.3,
            label: 'Sales',
            data: [450,560,490,550,440,510],
            borderColor: '#ed7966',
            backgroundColor: '#ed7966',

        }
    ],
};
const MonthlySales = () => {
    return (
        <Line options={options} data={data} />
    );
};

export default MonthlySales;