import React, { useState } from 'react'
import { TaskCard } from './TaskCard'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

// ----------
// タスクリストの状態を再編成する処理
// ----------
const reorder = (taskCardsList, startIndex, endIndex) => {
  const remove = taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(endIndex, 0, remove[0]);
}


export const TaskCards = () => {
  // ----------
  // state宣言
  // ----------
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: '0',
      draggableId: 'item0',
    }
  ]);
  // console.log(taskCardsList)

  // ----------
  // タスクの移動終了後の処理(カードのドラッグ＆ドロップ)
  // ----------
  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  }

  // ----------
  // 返り値
  // ----------
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div
            className='taskCardsArea'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
