import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {

    //const value = useContext(TaskContext)
    //console.log(value)

    const { deleteTask }  = useContext(TaskContext)

    return (           
            <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize ">{task.title}</h1>
            <p className="text-zinc-500 text-sm">{task.description}</p>
           {/*  <button onClick={monstrarAlerta}> */}
           <button className="bg-red-600 px-2 py-.5 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>
                Delete Task
            </button>
        </div>
    )
}

export default TaskCard 