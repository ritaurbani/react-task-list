import tasks from '../assets/tasks';


// const backlogArray = tasks.filter((curTask) => {
//   return curTask.state === "in_progress" || curTask.state === "backlog"
// })

// const completedArray = tasks.filter((curTask) => {
//   console.log(curTask)
//   return curTask.state === "completed"
// })


function App() {

  const completedTasks = tasks.filter(task => task.state === 'completed');
  const currentTasks = tasks.filter(task => task.state !== 'completed');

  return (
    <>
      <header className='header'>
        <h2>TASK MANAGER</h2>
      </header>
      <h3 className='title'> Current Tasks {currentTasks.length}</h3 >
      <ul>
        {
          currentTasks.map((task, index) => {
            return (
              <ul className='list'>
                <li key={index}>{task.title} 
                  <span className='tag'>{task.state}</span>
                </li> 
                <li key={index}><span>Priority:{task.priority}</span></li>
                <li key={index}><span>Est.Time:{task.estimatedTime}</span></li>
              </ul>
            )
          })
        }
      </ul>

      <hr />

      <h3 className='title'> Completed Tasks {completedTasks.length} </h3>
      <ul>
        {
          completedTasks.map((task, index) => {
            return (
              <ul>
                <li key={index}>{task.title}</li>
                <li key={index}><span>Priority:{task.priority}</span></li>
                <li key={index}><span>Est.Time:{task.estimatedTime}</span></li>
              </ul>
            )
          })
        }
      </ul>
    </>
  )
}

export default App

