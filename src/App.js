import { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import NewTask from './components/NewTask';
import Task from './components/Task';

function App() {
  
  const [taskList, setTaskList] = useState([]);
  
  const setTask = (newTask) => setTaskList([
    ...taskList,
    {id: Math.floor(Math.random() * 1000), text: newTask, done: false}
  ]);
  const deleteDone = () => {
    setTaskList(taskList.filter( item => !item.done))
  }    
  console.log(taskList)  
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo list - "Become a web developer" !</h1>
      </header>
      <div className="taskList">
        <ul>
          { taskList.map( task => <Task key={task.id} text={task.text} task={task}
          taskList={taskList} setTaskList={setTaskList} /> )} 
        </ul>
        {taskList.length > 0 && <ButtonComponent onClick={deleteDone} name="Delete done" />}        
      </div>      
      <div className="newTask">
        <NewTask setTask={setTask} />
      </div>       
    </div>
  );
}

export default App;