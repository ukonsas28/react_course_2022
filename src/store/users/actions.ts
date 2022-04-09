import { UsersActionsTypeType } from './types';

export const UsersActionsType: UsersActionsTypeType = {
  getUsers: 'GET_USERS',
};

export const GetUsersAction = (users: any[]) => ({
  type: UsersActionsType.getUsers,
  payload: users,
});
