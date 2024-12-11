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
      <div>
        {
          currentTasks.map(({ title, priority, estimatedTime, state }, index) => {
            return (
              <ul className='list'>
                <li key={index}>{title}
                  <span className='tag'>{state}</span>
                </li>
                <li key={index}><span>Priority:{priority}</span></li>
                <li key={index}><span>Est.Time:{estimatedTime}</span></li>
              </ul>
            )
          })
        }
      </div>

      <hr />

      <h3 className='title'> Completed Tasks {completedTasks.length} </h3>
      <div>
        {
          completedTasks.map((task, index) => {
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
      </div>
    </>
  )
}

export default App









