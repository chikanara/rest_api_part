import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "../const";

const intialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
    case DELETE_USER:
    case UPDATE_USER:
    case GET_USERS:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return { ...state, users: payload, isLoading: false };

    case ADD_USER_SUCCESS:
      return { ...state, users: [...state.users, payload], isLoading: false };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === payload._id ? { ...user, ...payload } : user
        ),
        isLoading:false
      };

      case DELETE_USER_SUCCESS:
          return {
              ...state,
              users:state.users.filter(user => user._id !== payload._id),
              isLoading:false
          }

          case ADD_USER_FAIL:
            case DELETE_USER_FAIL:
            case UPDATE_USER_FAIL:
            case GET_USERS_FAIL:
              return { ...state, error:payload};
        
    default:
      return state;
  }
};

export default userReducer;
