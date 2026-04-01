import React from 'react'

export default function Todo({taskData}) {
  return (
    <div>
      <p>
          <input type="checkbox" value={taskData.completed}/>
          {taskData.title}
          <button>ändern</button>
          <button>löschen</button>
        </p>
    </div>
  )
}
