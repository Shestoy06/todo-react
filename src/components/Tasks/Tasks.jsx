import { useEffect, useState } from "react"
import axios from "axios"
import Task from './Task/Task'
import s from './Tasks.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../../store/tasks/tasks.actions";
import {addTaskToState} from "../../store/tasks/tasks.slice"
import toast, {Toaster} from "react-hot-toast";

const Tasks = () => {

    const [newTask, setNewTask] = useState('')
    const [addingNewTask, setAddingNewTask] = useState(false)

    const user = useSelector(state => state.users)
    const stateTasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTasks(user))
    }, [])

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            addTask();
        }
    };
    const addTask = (e) => {
        e.preventDefault()
        axios.post(`https://fast-waters-54416-e453cccbfee4.herokuapp.com/api/task`, {
            title: newTask,
            content: newTask,
            isDone: false,
            authorName: user
        }).then(response => {
            dispatch(addTaskToState(response.data))
            setAddingNewTask(true)
            toast.success("Task added!", {
                style: {
                    borderRadius: '30px',
                },
            })
        })
        setNewTask('')
    }



    return (
        <div className={s.background}>
            <div><Toaster/></div>
            <div className={s.content}>
                <div className={s.title}>Make things done!</div>
                <form className={s.form} onSubmit={addTask}>
                    <input type="text" className={s.input}
                           onChange={e => setNewTask(e.target.value)}
                           value={newTask}/>
                    <button className={s.button} type={"submit"}>Add</button>
                </form>
                <div className={s.tasks} >
                    {stateTasks.length ? stateTasks.map((item, index) => {
                            if (addingNewTask) index = 0
                            return <Task content={item.content} key={item.id} id={item.id} index={index}/>
                        })
                        : 'No tasks yet!'
                    }
                </div>
            </div>
        </div>
    )
}

export default Tasks