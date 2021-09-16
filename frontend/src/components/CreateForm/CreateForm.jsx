import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOneData } from '../../redux/actions/dataAC'

function CreateForm() {

  const [titleInput, setTitleInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  console.log(titleInput);
  console.log(contentInput);


  const dispatch = useDispatch()

  const titleInputHandler = (e) => {
    setTitleInput(e.target.value)
  }

  const contentInputHandler = (e) => {
    setContentInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addOneData(titleInput, contentInput))
    setTitleInput('')
    setContentInput('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <input onChange={titleInputHandler} value={titleInput} type="text" className="form-control" placeholder="title" />
      </div>
      <div className="mb-3">
        <input onChange={contentInputHandler} value={contentInput} type="text" className="form-control" placeholder="content"/>
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  )
}

export default CreateForm;
