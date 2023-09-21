import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Chart = ({ matchesWon, matchesLost }) => {
    const data = [
        { title: 'Matches Won', value: matchesWon, color: '#0b8d07d6' },
        { title: 'Matches Lost', value: matchesLost, color: '#d33333d6' },
    ];

    return (
        <div className="chart-container row">
            <div className='col-lg-6 col-6'>
            <PieChart
                data={data}
                lineWidth={30} // Increase line width for a thicker pie chart
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={(index) => ({
                    fill: data[index].color,
                    fontSize: '10px',
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                })}
                radius={40} // Reduce the radius for a smaller pie chart
                startAngle={90} // Start the chart from the top
                viewBoxSize={[100, 100]} // Set the viewBox size
                className=''
            />
            </div>
            <div className='col-lg-5 col-6 align-items-center d-flex'>
                <div className="legend">
                    <div className="legend-item row">
                        <span className="legend-color" style={{ backgroundColor: '#36A2EB' }}></span>
                        <span className="legend-label" style={{ color: '#0b8d07d6' }}>Matches Won : {matchesWon}</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#FF6384' }}></span>
                        <span className="legend-label" style={{ color: '#d33333d6' }}>Matches Lost : {matchesLost}</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#FF6384' }}></span>
                        <span className="legend-label" style={{ color: 'black' }}>Total Matches : {matchesWon+matchesLost}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
