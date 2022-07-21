export const TaskRow = ({task, toggleTask}) => {
    return (
        <tr key={'tr' + task.name}>
            <td
                style={{
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <div>
                    {task.name}
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleTask(task)}
                    ></input>
                </div>

            </td>
        </tr>
    )
}