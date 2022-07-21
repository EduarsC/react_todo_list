export const TaskRow = ({task}) => {
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
                        value={task.done}
                    ></input>
                </div>

            </td>
        </tr>
    )
}