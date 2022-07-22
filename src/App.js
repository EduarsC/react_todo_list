import { useState, useEffect } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // this function will be used by TaskTable->TaskRow
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  function createNewTask(taskName) {
    /*
    for add a new element to the tasks, we need to, based in React recomendations,
    copy the actual array and then add the new element to the copy*/
    /*
    we add the task name the task list if
    this task not already exists
    */
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  /*
    if the postion for 'var' is empty, like this, 
    the function will be executed at start
  */
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  // is a function that is executed when a change is made over a data
  // all code after , will be executed when [taskItems] changed
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const cleanTask = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <br/>
        {/* we pass the createNewTask function to TaskCreator, 
            in general we can pass it everything.
            With this, we can pass it information to the component */}
        <TaskTable name={"PROJECT"} tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
          isChecked={showCompleted}
        />
        <br/>
        {showCompleted && (
          <TaskTable
            name={"DONE"}
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}
export default App;
