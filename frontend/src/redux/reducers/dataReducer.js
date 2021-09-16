import { GET_DATA, DEL_DATA, ADD_ONEDATA, CHANGE_DATA } from "../types/dataTypes";

function dataReducer(state = [], action) {

  switch (action.type) {
    case GET_DATA:
      return action.payload;

    case ADD_ONEDATA:
      return [...state, action.payload];

    case DEL_DATA:
      return state.filter(el => el._id !== action.payload);


    case CHANGE_DATA:
      return state.map(el => {
        console.log(action.payload);
        console.log(action);

        if (el._id === action.payload) {
          return {
            ...el,
            _id: action.payload,
            title: action.title,
            content: action.content
          }
        }
        return el
      })
    default:
      return state;
  }
}

export default dataReducer;


