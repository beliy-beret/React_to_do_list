import React from 'react';
import s from './buttonCreateTask.module.css'
const ButtonComponent = (props) => {
    return (
        <div className={s.createTask}>
            <button onClick={props.onClick}> {props.name} </button>
        </div>
    );
};

export default ButtonComponent;