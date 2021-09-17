import { List, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeData, updateData } from '../../redux/actions/dataAC';


function DataItem({ id, key, title, content }) {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const [inputContent, setInputContent] = useState(content);


  const editHandler = async () => {
    dispatch(updateData(id, inputTitle, inputContent))
    setEdit();
  }
  const deleteHandler = () => {
    dispatch(removeData(id))
  }
  const changeInputHandlerTitle = ({ target: { value } }) => {
    setInputTitle(value);
  }

  const changeInputHandlerContent = ({ target: { value } }) => {
    setInputContent(value);
  }

  return (
    edit ?
      <div className="d-flex justify-content-center">
        <div className="mb-3 mt-4 d-flex justify-content-center w-75">
          <input value={inputTitle} onChange={changeInputHandlerTitle} className="form-control" type="text" />
          <input value={inputContent} onChange={changeInputHandlerContent} type="text" className="ml-3 form-control" />
          <button type="button" onClick={() => { editHandler(id, title, content) }} className="btn btn-primary">Подтвердить</button>
        </div>
      </div>
      :
      <div className="d-flex justify-content-center mt-3">
        <li className="list-group-item d-flex align-items-center justify-content-between w-75">
          <span>{id}</span>
          <span>{title}</span>
          <span>{content}</span>
          <div className="d-flex justify-content-end">
          <button type="button" onClick={() => setEdit(prev => !prev)} className="btn btn-primary ml-3">Изменить</button>
          <button type="button" onClick={() => deleteHandler(id)} className="btn btn-danger">Удалить</button>&nbsp;
          </div>
        </li>
      </div>

  )
}


export default DataItem;

