import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../../redux/actions/dataAC';
import DataItem from '../DataItem/DataItem';
import { List } from 'antd';

function DataList() {

  const dataList = useSelector(state => state.data);
  console.log(dataList);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [])

  return (
    <List>
      {dataList.map((el) =>
        <DataItem
          key={el._id}
          id={el._id}
          title={el.title}
          content={el.content}
        />)}
    </List>
  )
}

export default DataList;

