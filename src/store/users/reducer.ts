import { UsersActionsType } from './actions';
import { ActionType, UserReducerType } from './types';

const initialState: UserReducerType = {
  data: { info: {}, results: [] },
  oneUserData: {},
};

const usersReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UsersActionsType.getUsers:
      return {
        ...state,
        data: action.payload,
      };
    case UsersActionsType.getOneUser:
      return {
        ...state,
        oneUserData: action.payload,
      };
    case UsersActionsType.clearOneUser:
      return {
        ...state,
        oneUserData: {},
      };

    default:
      return state;
  }
};

export default usersReducer;
