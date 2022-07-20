import { useState } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator'



function App() {

  const [taskItems, setTaskItems] = useState([
    /* { name: '1° task', done: false },
    { name: '2° task', done: false },
    { name: '3° task', done: false }, */
  ]);

  function createNewTask(taskName) {
    /* for add a new element to the tasks, we need to, based in React recomendations,
      copy the actual array and then add the new element*/
    setTaskItems([...taskItems, {name: taskName, done: false}])
  }

  return (
    <div className="App">
      {/* we pass the createNewTask function to TaskCreator, 
      in general we can pass it everything.
      With this, we can pass it information to the component */}
      <TaskCreator createNewTask={createNewTask} />
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>
              Task
            </th>
          </tr>
        </thead>
        <tbody>
          {
            taskItems.map(task => (
              <tr key={'tr'+task.name}>
                <td>
                  {task.name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}
export default App;
