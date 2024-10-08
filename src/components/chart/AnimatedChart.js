import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import './AnimatedChart.scss';

const data = [
    { name: 'Cost Savings', value: 70 },
    { name: 'Project ROI', value: 85 },
    { name: 'Development Time Savings', value: 80 },
    { name: 'Optimization Impact', value: 75 }
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const CustomActiveShapePieChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );


        const currentChartRef = chartRef.current;

        if (currentChartRef) {
            observer.observe(currentChartRef);
        }

        return () => {
            if (currentChartRef) {
                observer.unobserve(currentChartRef);
            }
        };
    }, []);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <div className="chart-text-container">
            <div className="text-content">
                <h2>Why Choose Us?</h2>
                <p>Our company excels in delivering measurable outcomes:</p>
                <ul>
                    <li><strong>Cost Savings:</strong> Up to 70% saved on average for clients.</li>
                    <li><strong>Project ROI:</strong> Expect an ROI of over 85%.</li>
                    <li><strong>Development Time Savings:</strong> Our agile development saves 80% in time.</li>
                    <li><strong>Optimization Impact:</strong> 75% improvement in performance and scalability.</li>
                </ul>
            </div>
            <div ref={chartRef} className="chart-container">
                {isInView && (
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius="60%"
                                outerRadius="80%"
                                fill="#0077ff"
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                )}
            </div>
        </div>
    );
};

export default CustomActiveShapePieChart;
