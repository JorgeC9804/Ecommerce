import { userTypes } from "../types/userTypes";

export const addUser = (id, userName) => {
  return {
    type: userTypes.ADD_USER,
    id,
    userName,
  };
};

export const deleteUser = id => {
  return {
    type: userTypes.DELETE_USER,
    id,
  };
};

export const updateId = () => {
  return {
    type: userTypes.UPDATE_ID,
  };
};
