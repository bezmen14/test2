import { GET_DATA, DEL_DATA, ADD_ONEDATA, CHANGE_DATA } from "../types/dataTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_DATA,
    payload: value
  }
}

export function createData(value) {
  return {
    type: ADD_ONEDATA,
    payload: value
  }
}

export function deleteData(id) {
  return {
    type: DEL_DATA,
    payload: id
  }
}

export function change(id, title, content) {
  return {
    type: CHANGE_DATA,
    payload: id, title, content,
  }
}

export const getAllData = () => async (dispatch) => {
  const data = await axios('http://127.0.0.1:3001/api/v1/data');
  dispatch(setAll(data.data))
}

export const addOneData = (title, content) => async (dispatch) => {
  const oneData = await axios.post('http://127.0.0.1:3001/api/v1/data', { title, content })
  dispatch(createData(oneData.data))
}


export const updateData = (id, inputOneValue, inputTwoValue) => async (dispatch) => {
  await axios.put('http://127.0.0.1:3001/api/v1/data', { id, inputOneValue, inputTwoValue })
  dispatch(change(id, inputOneValue, inputTwoValue))
}


export const removeData = (id) => async (dispatch) => {
  await axios.delete('http://127.0.0.1:3001/api/v1/data', { data: { id } });
  dispatch(deleteData(id))
}
