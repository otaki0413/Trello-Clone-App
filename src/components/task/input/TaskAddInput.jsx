import React from 'react'
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  // ----------
  // フォーム送信時の処理
  // ----------
  const handleSubmit = (e) => {

    // 一意なID作成
    const taskId = uuid();
    e.preventDefault();

    // フォームが空の場合、早期リターン
    if (inputText === ''){
      return;
    }

    // カード追加処理
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      }
    ]);

    // 入力フォームを空にする処理
    setInputText('');
  }

  // --------------------
  // フォームに入力されるたびにinputTextを更新する処理
  // --------------------
  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  // ----------
  // 返り値
  // ----------
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className='taskAddInput'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
