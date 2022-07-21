import { useState } from 'react';

export const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName)
        localStorage.setItem('task', newTaskName)
        setNewTaskName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Enter new task'
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Save task</button>
        </form>
    )
}