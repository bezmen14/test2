import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../../redux/actions/dataAC';
import DataItem from '../DataItem/DataItem';
import { ListGroup } from 'reactstrap';

function DataList() {
  const dataList = useSelector(state => state.data);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [])

  return (
    <ListGroup>
      {dataList.map((el) =>
        <DataItem
          key={el._id}
          id={el._id}
          title={el.title}
          content={el.content}
        />)}
    </ListGroup>
  )
}

export default DataList;
