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
    dispatch(updateData(id, inputTitle,inputContent))
    setEdit();
  }
  const deleteHandler = () => {
    dispatch(removeData(id))
  }
  const changeInputHandlerTitle = ({target: {value}}) => {
    setInputTitle(value);
  }

  const changeInputHandlerContent = ({target: {value}}) => {
    setInputContent(value);
  }

  return (
    edit ?
    <li>
      <div >
         <input value={inputTitle} onChange={changeInputHandlerTitle} type="text" />
         <input value={inputContent} onChange={changeInputHandlerContent} type="text" />
      </div>
      <span>
        <button type="button" onClick={()=> {editHandler(id, title, content)}} className="btn btn-primary">Submit changes</button>
      </span>
    </li>
    :
        <List.Item >
          <List.Item.Meta
            id={id}
            key={key}
            avatar={id}
            title={title}
            description={content}
          />
          <span>
          <button type="button" onClick={() => deleteHandler(id)} className="btn btn-danger">Delete</button>&nbsp;
          <button type="button" onClick={() => setEdit(prev => !prev)} className="btn btn-primary">Change</button>
        </span>
        </List.Item>

  )
}


export default DataItem;

