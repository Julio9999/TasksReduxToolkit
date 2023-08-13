import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { deleteTask } from "../features/tasks/tasksSlice";
import { useNavigate } from "react-router-dom"


const TaskList = () => {
    const tasks = useSelector((data:RootState) => data.tasks)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id: string) => {
        dispatch(deleteTask(id))
    }

    const handleUpdate = (id: string) => {
        navigate(`update/${id}`)
    }

    return (
        tasks.map((task) => (
            <div  key={task.id}>
                <h2>{task.title}</h2>
                <h3>{task.description}</h3>
                <span>{task.completed ? 'Completed' : 'In process'}</span>
                <button onClick={() =>handleDelete(task.id)}>Delete task</button>
                <button onClick={() => handleUpdate(task.id)}>Update task</button>
            </div>
        ))
    )
}

export default TaskList;