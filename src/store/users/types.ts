export type UsersActionsTypeType = {
  getUsers: 'GET_USERS';
  getOneUser: 'GET_ONE_USER';
  clearOneUser: 'CLEAR_ONE_USER';
};

export type UserReducerType = {
  data: { results: any; info: any };
  oneUserData: {};
};

export type GetUsersActionType = {
  type: UsersActionsTypeType['getUsers'];
  payload: {};
};

export type GetOneUserActionType = {
  type: UsersActionsTypeType['getOneUser'];
  payload: {};
};

export type ClearOneUserActionType = {
  type: UsersActionsTypeType['clearOneUser'];
};

export type ActionType = GetUsersActionType | GetOneUserActionType | ClearOneUserActionType;
