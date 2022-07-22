export const TaskRow = ({task, toggleTask}) => {
    return (
        <tr key={'tr' + task.name}>
            <td key={task.name}
                className="d-flex justify-content-between"    
            >
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