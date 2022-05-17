import React, { useState } from 'react'

export const TaskCardTitle = () => {
  // ---------
  // state宣言
  // ---------
  /* 入力エリアのクリックを確認する真偽値 */
  const [isClick, setIsClick] = useState(false);

  /* 入力エリアの値 */
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  // ---------
  // 真偽値切り替え処理
  // ---------
  const handleClick = () => {
    setIsClick(true);
  }

  // ----------
  // 入力値を状態変数に、更新する処理
  // ----------
  const handleChange = (e) => {
    console.log(e.target);
    setInputCardTitle(e.target.value)
  }

  // ----------
  // フォーム送信時の処理
  // ----------
  const handleSubmit = (e) => {
    // ----------
    // 画面の更新を防ぐ
    // ----------
    e.preventDefault();
    setIsClick(false);
  }

  // ----------
  // カーソルが入力エリアを外れた時の処理
  // ----------
  const handleBlur = () => {
    setIsClick(false)
  }

  // ----------
  // 返り値
  // ----------
  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {/* 真偽値に応じて、表示を変更 */}
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
