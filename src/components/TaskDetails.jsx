import React from "react";

import Button from "./Button";
import './TaskDetails.css';

import {useHistory, useParams} from "react-router-dom";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Apenas sus amogus, frase teste
                </p>
            </div>
        </>
    );
}

export default TaskDetails;