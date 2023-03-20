import { useState, useContext } from "react"
import { TaskContext } from '../context/TaskContext'

export function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    //const value = useContext(TaskContext)
    //console.log(value)

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description)
        createTask({
            title,
            description
        })

        setTitle('');
        setDescription('')
        /*const newTask = {
            title,
            id: 3,
            description: 'mi cuarta tarea'
        }*/
        //console.log(newTask)
        //createTask(newTask);
    }

    return (
         <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4' >
            <h1 className="text-2xl font-bold text-white mb-3">Create Task</h1>
            <input placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                className="bg-slate-300 p-3 w-full mb-2"
                />
            <textarea placeholder='Escribe la descripcion de la tarea'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="bg-slate-300 p-3 w-full mb-2"
            ></textarea>
            <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">
                save
            </button>
        </form>
         </div>
    )
}