import React from 'react';
import ButtonComponent from './ButtonComponent';
import './task.css';

const Task = ({ text, task, taskList, setTaskList }) => {
    const deleteHandler = () => {
        setTaskList(taskList.filter( el => el.id !== task.id))
    };
    const checkHandler = (e) => {
        setTaskList(taskList.map( item => {
            if (item.id === task.id) {
                return { 
                    ...item, done: e.target.checked
                }
            }
            return item;
        }))
    };
    
    return (
        <li className="task" >
            <p className={`${task.done && "done"}`}> {text} </p>
            <div className="check"><input type="checkbox" onChange={checkHandler} /></div>           
            <ButtonComponent onClick={deleteHandler} name="delete" />            
        </li>
    );
};

export default Task;