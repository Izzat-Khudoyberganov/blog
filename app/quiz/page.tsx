"use client";

import React, { useState } from "react";
import { dataProps } from "utility/types";
import { data } from "./data";
import "./style.css";

const QuizPage = () => {
    const [question, setQuestion] = useState<dataProps>();
    const [count, setCount] = useState<number>(1);
    function randomNumbers() {
        setCount(Math.floor(Math.random() * (65 - 1) + 1));
        setQuestion(data.find((el) => el.id === count));
    }
    return (
        <div className='container'>
            <div className='quiz-wrapper'>
                <h2 className='quiz-wrapper_title'>
                    Would you like to answer <span>random</span> questions
                    generator?
                </h2>
                <button
                    type='button'
                    className='start-btn'
                    onClick={() => randomNumbers()}
                >
                    Start
                </button>
                <p className='question-text'>{question?.text}</p>
            </div>
        </div>
    );
};

export default QuizPage;
