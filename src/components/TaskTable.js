import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toggleTask, showCompleted=false, name }) => {

    const taskTableRow = (doneValue) => {
        return (
            tasks
                .filter(task => task.done === doneValue)
                .map(task => (
                    <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
                ))
        )
    }

    return (
        <table className="table table-dark table-striped table-bordered border-secondary">
            <thead>
                <tr>
                    <th className="table-primary" style={{ textAlign: "center" }} key={taskTableRow.name}>
                        {name}
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRow(showCompleted)
                }
            </tbody>
        </table>
    )
}
