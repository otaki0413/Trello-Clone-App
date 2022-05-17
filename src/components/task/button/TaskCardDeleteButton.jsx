import React from 'react'

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {

  // ----------
  // タスクカード削除処理
  // ----------
  const taskCardDeleteButton = (id) => {
    // ----------
    // IDが異なるタスクをリストに残す(=IDに一致するものをリストから削除する)
    // ----------
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
  };

  // ----------
  // 返り値
  // ----------
  return (
    <div>
      <button
        className='taskCardDeleteButton'
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}
