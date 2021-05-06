import {
  SAVE,
  USER_DATA,
  DELETE,
  UPDATE,
  SAVE_UPDATE,
  LOG_OUT,
} from "../Actions/ActionType";

const initialState = {
  users: [],
  userdata: [],
  updateData: [],
  isLogined: false,
  accessToken: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        users: [ action.data],
        isLogined: true,
        accessToken: action.data.token,
      };

    case SAVE:
      console.log("userdata", state.userdata);
      return {
        ...state,
        userdata: [...state.userdata, action.data],
      };

    case DELETE:
      state.userdata.splice(action.index, 1);
      return { ...state, userdata: [...state.userdata] };

    case UPDATE:
      let fetch = state.userdata.filter((arr, id) => arr.id === action.data.id);
      console.log(fetch);

      return { ...state, updateData: fetch };

    case SAVE_UPDATE:
      console.log("save update", state.userdata);
      return {
        ...state,
        userdata: state.userdata.map((value, i) =>
          value.id === action.data.id
            ? {
                id: action.data.id,
                fname: action.data.fname,
                lname: action.data.lname,
                age: action.data.age,
                salary: action.data.salary,
                exp: action.data.exp,
                tech: action.data.tech,
                profile: action.data.profile,
              }
            : value
        ),
      };

    case LOG_OUT:
      return {
        ...state,
        users: null,
        isLogined: false,
        accessToken: "",
      };
    default:
      return state;
  }
}
