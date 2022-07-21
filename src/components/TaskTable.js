import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toggleTask, showCompleted, name }) => {

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
        <table border={1} width="256px" style={{ margin: "auto", marginTop: "20px" }}>
            <thead>
                <tr>
                    <th style={{ textAlign: "center" }}>
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
