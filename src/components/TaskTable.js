import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks }) => {
    return (
        <table border={1} width="256px" style={{ margin: "auto", marginTop: "20px" }}>
            <thead>
                <tr>
                    <th style={{ textAlign: "center" }}>
                        Tasks
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map(task => (
                       <TaskRow task={task} key={task.name}/> 
                    ))
                }
            </tbody>
        </table>
    )
}
