import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOneData } from '../../redux/actions/dataAC'

function CreateForm() {
  const [titleInput, setTitleInput] = useState('')
  const [contentInput, setContentInput] = useState('')

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
    <div className='d-flex justify-content-center'>
      <form className='w-25' onSubmit={submitHandler}>
        <div className="mb-3 mt-4">
          <input onChange={titleInputHandler} value={titleInput} type="text" className="form-control" placeholder="title" />
        </div>
        <div className="mb-3">
          <input onChange={contentInputHandler} value={contentInput} type="text" className="form-control" placeholder="content" />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    </div>
  )
}

export default CreateForm;
