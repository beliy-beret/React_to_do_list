import { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import NewTask from './components/NewTask';
import Task from './components/Task';

function App() {
  
  const [taskList, setTaskList] = useState([]);
  const [taskDone, setDone] = useState(false);
    
  const removeItem = (itemIndex) => {
    taskList.splice(itemIndex, 1);
    setTaskList([...taskList])}  
  
  const setTask = (newTask) => setTaskList([
    ...taskList,
    {value: newTask, done: taskDone}
  ]);  
  
  const changeDone = (i, value) => setDone(Object.assign( taskList[i], {done: value} ))

  const tasks = taskList.map( (item, index) => (
    <Task key={index} index={index} changeDone={changeDone}
    task={item.value} removeItem={removeItem} />))

  const delDone= () => {
    let done = taskList.filter((task) => task.done === true);
    done.forEach((item) => {
      let index = taskList.indexOf(item);
      taskList.splice(index, 1);
      setTaskList([...taskList])
    })
  };
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo list - "Become a web developer" !</h1>
      </header>
      <div className="taskList">
        {tasks}
        {tasks.length > 0 && <ButtonComponent onClick={delDone} name="Delete doneTask" />}
      </div>      
      <div className="newTask">
        <NewTask setTask={setTask} />
      </div>       
    </div>
  );
}

export default App;