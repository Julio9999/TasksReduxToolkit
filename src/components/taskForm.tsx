import { useEffect, useState } from "react"
import { ITaskForm } from "../interfaces/tasks/taskForm"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/tasks/tasksSlice"
import { useNavigate, useParams } from "react-router-dom"
import { RootState } from "../app/store"
import { InitialState } from "../interfaces/tasks/task"


export default function TaskForm () {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [task, setTask] = useState<InitialState>({
        title: '',
        description: '',
        completed: false,
        id: ''
    })
    const tasks = useSelector((data:RootState) => data.tasks)


    const [data, setData] = useState<ITaskForm>({
        title: '',
        description: ''
    })

    useEffect(() => {
        if(id){
            const task = tasks.filter((task) => task.id == id);
            if(task) setTask(() => task[0])
        }
    }, [])



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData((current) => ({...current, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(id){
            const payload = {
                data,
                id
            }
            dispatch(updateTask(payload))
        }else{
            dispatch(addTask(data))
        }
        navigate('/')
    }

    
    return (
       <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="title" name="title" onChange={handleChange} defaultValue={task.title}  />

            <textarea name="description" placeholder="description"  onChange={handleChange} defaultValue={task.description} />

            <button>Guardar</button>
       </form>
    )
}

