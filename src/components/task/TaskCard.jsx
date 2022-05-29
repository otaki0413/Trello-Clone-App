import React, { useState } from 'react'
import { TaskCardTitle } from "./TaskCardTitle"
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton"
import { TaskAddInput } from "./input/TaskAddInput"
import { Tasks } from "./Tasks"
import { Draggable } from 'react-beautiful-dnd'

export const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index, }) => {
  // ----------
  // state宣言
  // ----------
  /* 入力したタスク */
  const [inputText, setInputText] = useState('');

  /* タスク格納用リスト */
  const [taskList, setTaskList] = useState([]);

  // ----------
  // 返り値
  // ----------
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className='taskCard'
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className='taskCardTitleAndTaskCardDeleteButtonArea'
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          <Tasks
            inputText={inputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  )
}
