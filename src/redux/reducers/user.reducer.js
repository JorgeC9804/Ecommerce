import { userTypes } from "../types/userTypes";

const initialState = [];

export const userCounter = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.ADD_USER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          email: action.email,
          user: action.user,
          password: action.password,
        },
      ];
    case userTypes.DELETE_USER:
      return state.filter(user => user.id !== action.id);
    case userTypes.UPDATE_ID:
      for (let i = 0; i < state.length; i++) {
        state[i].id = i + 1;
      }
      return state;

    default:
      return state;
  }
};
