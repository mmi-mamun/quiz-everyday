import React, { useEffect, useState } from 'react';
import './Exam.css'
import { useLocation } from "react-router-dom";


// const btnHandler = (id) => {
//     console.log('clicked');
// }

const showAnswer = (answer) => {
    alert('Hints : :' + '  ' + answer);
}



const Exam = (props) => {

    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    const location = useLocation();
    const state = location.state;

    const checkAnswer = (given, right, question) => {
        let fullID = question + given;

        if (given === right) {
            document.getElementById(`${fullID}`).style.background = "green";
            setCorrect(correct + 1);
            alert(`😊 Yes, you are right.`)

        } else {
            document.getElementById(`${fullID}`).style.background = "red";

            setWrong(wrong + 1);
            alert(`☹️ Sorry, your answer is wrong.
            Correct answer is : :  ${right}`)
        }
        let parent = document.getElementById(`${fullID}`).parentNode;
        parent.classList.add("option-disabled");
    }


    const [getQuestion, setGetQuestions] = useState([]);
    const [qns, setQns] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${state}`)
            .then(res => res.json())
            .then(data => {
                setGetQuestions(data.data);
                setQns(data.data.questions);
            })
    }, [])

    let a = 1;



    return (
        <div>
            <div className="wrapper">
                <div className="container">
                    <div className="top">
                        <h1>{getQuestion.name}</h1>
                        <h3>Total Mark: <b>{getQuestion.total}</b></h3>
                        <h4>
                            Total correct : <span id='total-correct'> {correct} </span>
                            <span> ~ : : : ~ </span>
                            Total wrong : <span id='total-wrong'> {wrong} </span>
                        </h4>
                    </div>
                    <div className="question-set">
                        {

                            qns.map(elm => {
                                return (
                                    <div className="question" key={elm.id}>
                                        <div className="question-text">
                                            <span>{a++}.</span>
                                            <span style={{ marginLeft: '5px' }} dangerouslySetInnerHTML={{ __html: elm.question }}></span>
                                            <span className="show-answer" onClick={() => showAnswer(elm.correctAnswer)}>👁</span>
                                        </div>
                                        <div className="options" id="">
                                            {

                                                elm.options[0] &&
                                                <p id={elm.question + elm.options[0]} onClick={() => checkAnswer(elm.options[0], elm.correctAnswer, elm.question)}>
                                                    <span style={{ marginRight: '5px' }}>A. </span>

                                                    {elm.options[0]}
                                                </p>
                                            }

                                            {
                                                elm.options[1] &&
                                                <p id={elm.question + elm.options[1]} onClick={() => checkAnswer(elm.options[1], elm.correctAnswer, elm.question)}>
                                                    <span style={{ marginRight: '5px' }}>B. </span>
                                                    {elm.options[1]}
                                                </p>
                                            }

                                            {
                                                elm.options[2] &&
                                                <p id={elm.question + elm.options[2]} onClick={() => checkAnswer(elm.options[2], elm.correctAnswer, elm.question)}>
                                                    <span style={{ marginRight: '5px' }}>C. </span>
                                                    {elm.options[2]}
                                                </p>
                                            }

                                            {
                                                elm.options[3] &&
                                                <p id={elm.question + elm.options[3]} onClick={() => checkAnswer(elm.options[3], elm.correctAnswer, elm.question)}>
                                                    <span style={{ marginRight: '5px' }}>D. </span>
                                                    {elm.options[3]}
                                                </p>
                                            }
                                            {/* {console.log(optionA, optionB)} */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Exam;