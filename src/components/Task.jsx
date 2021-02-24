import React from 'react';
import ButtonComponent from './ButtonComponent';
import s from './task.module.css';

const Task = (props) => {
    const delTask = () => (props.removeItem(props.index));
    const handleInput = (e) => props.changeDone(props.index, e.target.checked);
    return (
        <li className={s.task}>
            <span> {props.task} </span> <span className={s.chbox}> <input type="checkbox" onChange={handleInput} /> </span>           
            <ButtonComponent onClick={delTask} name="delete" />            
        </li>
    );
};

export default Task;