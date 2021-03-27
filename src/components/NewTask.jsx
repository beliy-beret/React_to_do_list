import React from 'react';
import { Form, Field } from 'react-final-form'
import ButtonComponent from './ButtonComponent';
import s from './newTask.module.css'

const NewTask = ({ setTask }) => {            
    
    const createTask = async (values) => {
        await setTask(values.newTask);
        values.newTask = "";        
    };   

    return (
        <Form
            onSubmit={createTask}        
            render={({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>
                    <div className={s.task}>
                        <h2> Create TASK !</h2>
                        <Field name="newTask" component="input" placeholder="enter text of task" />
                        <ButtonComponent name="New task"/>
                    </div>    
                </form>                
            )}
        />
    );
};

export default NewTask;