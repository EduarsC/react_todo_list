import { useState } from 'react';
// props has only one property, that's why we directly use it
export const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName)
        
        setNewTaskName('')
    }
    return (
        <form onSubmit={handleSubmit} style={{marginTop: '20px'}}> 
            <input
                type="text"
                placeholder='Enter new Project'
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Add Project</button>
        </form>
    )
}