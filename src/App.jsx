import TaskList from './components/TasksList'
import { TaskForm } from './components/TaskForm'

const App = () => {

  //const [tasks, setTasks] = useState([])
  /*
    function createTask(task) {
      setTasks([...tasks, task])
    }
  
    function createTask(taskTitle) {
      setTasks([...tasks, {
        title: taskTitle,
        id: tasks.length,
        description: 'nueva tarea'
      }])
    }*/

  return <main className='bg-zinc-900 h-screen'>
    {/* <TaskForm createTask={createTask} />
    <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
    <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList />
    </div>
  </main>
}

export default App