import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, PieChart, Cell, Pie, Legend, Tooltip } from 'recharts';


const Statistics = () => {
    const [getCards, setGetCards] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setGetCards(data.data))
        // .then(data => console.log(data))
    }, [])


    let myData = [];
    const COLORS = ["#3498DB", "#F1C40F", "#8E44AD", "#28B463"];
    let i = 0;
    getCards.map(card => {
        let name = card.name;
        let total = card.total;
        const obj = { name: name, total: total, bg: COLORS[i++] };
        myData.push(obj);
    })



    return (
        <>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="total" data={myData} label  >
                            {
                                myData.map((entry, index) => <Cell dataKey={myData.name} fill={COLORS[index % COLORS.length]}>{myData.name}</Cell>)
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>


                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={myData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#82ca9d">
                            {
                                myData.map((entry, index) => <Cell dataKey={myData.name} fill={COLORS[index % COLORS.length]}></Cell>)
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </>


    );
};

export default Statistics;