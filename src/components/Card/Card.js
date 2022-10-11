import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../Header/Header.css';
import './card.css'


const Card = () => {


    const [getCards, setGetCards] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setGetCards(data.data))
        // .then(data => console.log(data))
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                <div className="cards">

                    {
                        getCards.map((card) => {
                            return (<div className="card" key={card.id}>
                                <img src={card.logo} alt="" />
                                <div className="row">
                                    <p>{card.name}</p>
                                    <p>Total Question: <b>{card.total}</b></p>
                                </div>
                                <Link key={card.id} state={card.id} className="btn" to="/Exam">Get Started</Link>
                            </div>)
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Card;