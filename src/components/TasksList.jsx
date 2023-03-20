import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

//function TasksList(props) {
//function TasksList({ tasks , deleteTask }) {
function TasksList() {

    const { tasks } = useContext(TaskContext)

    //if (props.tasks.length === 0) {
    if (tasks.length === 0) {
        return <h1 className='text-white text-5xl font-bold text-center '> No hay tareas aun</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-4'>
            {/* {props.tasks.map((task) => ( */}
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />))}
        </div>
    )
}

export default TasksList