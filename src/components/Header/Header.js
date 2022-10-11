import React from 'react';
import './Header.css'
import logo from '../../Utilities/quiz.png'

const Header = () => {
    return (
        <div class="wrapper">
            <div className="container">
                <div className="display-flex">
                    <div className="header-image">
                        <img className='img' src={logo} alt="header-img" />
                    </div>
                    <div className="header-text">
                        <p className='txt'>Everyday Quiz is one kind of popular quiz game skill which will ask questions from different categories. The skill will ask you questions one after another from different topics like skills, sports, geography, history, science etc. <br /> <br />
                            There will be options to help you for each questions. You will get notified whenever you answered right or wrong. The skill can be used as a daily companion to anyone who is preparing for the competitive exams. Interesting and informative information is given at the end of each question. <strong>Best of luck..</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;