import {
  SAVE,
  USER_DATA,
  DELETE,
  UPDATE,
  SAVE_UPDATE,
  LOG_OUT,
} from "./ActionType";

export const userData = (userdata) => {
  return {
    type: USER_DATA,
    data: userdata,
  };
};

export const addData = (data) => {
  console.log("action data", data);
  return {
    type: SAVE,
    data: data,
  };
};

export const updateData = (data) => {
  console.log("select data for update ", data);
  return {
    type: UPDATE,
    data: data,
  };
};

export const saveUpdatedData = (data) => {
  return {
    type: SAVE_UPDATE,
    data: data,
  };
};

export const remove = (index) => {
  console.log("select index", index);
  return {
    type: DELETE,
    index: index,
  };
};

export const logOut = (data) => {
  console.log("action logout");
  return {
    type: LOG_OUT,
    data: data,
  };
};
