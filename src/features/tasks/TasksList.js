import React from "react";
import { useSelector } from 'react-redux';
import { selectTasksList } from './tasksSlice'

const TasksList = () => {

  const tasksListView = useSelector(selectTasksList);
  console.log('tasksListView', tasksListView);

  return (
    <div className="tasksList">
      <h3>
        Список дел:
      </h3>
      {tasksListView !== [] ?
        tasksListView.map(element => {
        return (
          <div>
            {element.date} {element.name}
          </div>
        )
        })
      : null}
    </div>
  )
}

export default TasksList;