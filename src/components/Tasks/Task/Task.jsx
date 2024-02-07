import s from './Task.module.css'
import {ReactComponent as Icon} from "../../../images/delete-button-svgrepo-com.svg";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {removeTaskFromState, updateTaskFromState} from "../../../store/tasks/tasks.slice";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

const Task = ({content, id, index}) => {

    const dispatch = useDispatch()
    const deleteTask = () => {
        setIsVisible(false);
        setTimeout(() => {
            axios.delete(`https://fast-waters-54416-e453cccbfee4.herokuapp.com/api/task/${id}`)
                .then(res => {
                    dispatch(removeTaskFromState(res.data))
                    toast.success("Task deleted!", {
                        icon: '👏',
                        style: {
                            borderRadius: '30px',
                        },
                    })
                })
        }, 500); // Timeout for wait the delete animation first and after delete it from dom and server


    }
    const [newTask, setNewTask] = useState(content)
    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    // When task is unfocused (blur) send a request for update
    const handleBlur = () => {
        axios.put(`https://fast-waters-54416-e453cccbfee4.herokuapp.com/api/task/${id}`, {
            content: newTask,
        })
            .then(res => {
                dispatch(updateTaskFromState({id, newTask}))
                toast.success("Task updated!", {
                    icon: '✏️',
                    style: {
                        borderRadius: '30px',
                    },
                })
            })
    }

    let inputStyle = {
        minWidth: '50px',
        width: `${newTask.length * 8}px`
    };


    // Animation

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Apply a delay to each task
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, index * 100); // Adjust delay as needed
        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div className={`${s.task} ${isVisible ? `${s.appear}` : `${s.hide}`}`}>
            <form>
                <input
                    type="text"
                    style={inputStyle}
                    value={newTask}
                    onChange={handleChange}
                    placeholder="Type..."
                    onBlur={handleBlur}/>

            </form>
            <Icon className={s.icon} onClick={deleteTask}/>
        </div>

    )
}
export default Task