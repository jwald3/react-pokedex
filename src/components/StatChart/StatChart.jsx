import React, { useContext, useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { AppContext } from '../../App';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './StatChart.css'

const StatChart = ({ stats }) => {

    const { selectedCard } = useContext(AppContext);
    const [statsJSON, setStatsJSON] = useState([]);
    const [statData, setStatData] = useState({
            labels: statsJSON.map((data) => data.stat),
            datasets: [
                {
                    label: "Stats",
                    data: statsJSON.map((data) => data.value),
                    backgroundColor: ["red", "green", "blue", "orange", "purple"],
                    borderColor: "black",
                    borderWidth: 1,
                },
            ],
        });
    const options = {
        scales: {
            x: {
                min: 0,
                max: 200,
            },
            y: {
                beginAtZero: true
            }
        },
        indexAxis: 'y',
        plugins: {
            autocolors: false,
            datalabels: {
                display: true,
                color: 'black'
            },
            legend: {
                display: false
            },
        }
    }

    useEffect(() => {
       setStatsJSON([]);

        stats.map((stat, i) => {
            const statObj = {};
            statObj['stat'] = stat['stat']['name'];
            statObj['value'] = stat['base_stat'];
            statObj['id'] = i;
            setStatsJSON(statsJSON => [...statsJSON, statObj])
        })

    }, [stats])
    
    useEffect(() => {
        setStatData(null)

        setStatData({
            labels: statsJSON.map((data) => data.stat),
            datasets: [
                {
                    label: "Stats",
                    data: statsJSON.map((data) => data.value),
                    backgroundColor: ["#FF0000", "#F08030", "#F8D030", "#6890F0", "#78C850", "#F85888"],
                    borderColor: "black",
                    borderWidth: 1,
                },
            ],
        });
    }, [statsJSON, selectedCard])


    return (
        <div className="stat-chart">
            Stats
            <div className="chart">
                <Bar data={statData} plugins={[ChartDataLabels]} options={options} />
            </div>
        </div>
        
    )
}

export default StatChart