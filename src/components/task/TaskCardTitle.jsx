import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  // ボタンの真偽値切り替え
  const handleClick = () => {
    setIsClick(true);
  }

  // 入力値を状態変数に、更新する処理
  const handleChange = (e) => {
    setInputCardTitle(e.target.value)
  }

  // フォーム入力後、エンターキー押下時の処理
  const handleSubmit = (e) => {
    e.preventDefault(); // 画面の更新を防ぐ
    setIsClick(false);
  }

  // カーソルが入力エリアから外れた時に、タイトルに戻す処理
  const handleBlur = () => {
    setIsClick(false)
  }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className='taskCardTitleInput'
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  )
}
