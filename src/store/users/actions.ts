import makeRequest from '../../network';
import { UsersActionsTypeType } from './types';

export const UsersActionsType: UsersActionsTypeType = {
  getUsers: 'GET_USERS',
  getOneUser: 'GET_ONE_USER',
  clearOneUser: 'CLEAR_ONE_USER',
};

export const GetUsersAction = (page: number) => async (dispatch: any) => {
  const data = await makeRequest({ url: '/character', params: { page } });
  dispatch({
    type: UsersActionsType.getUsers,
    payload: data,
  });
};
export const GetOneUserAction = (id: string) => async (dispatch: any) => {
  const data = await makeRequest({ url: `/character/${id}` });
  dispatch({
    type: UsersActionsType.getOneUser,
    payload: data,
  });
};
export const ClearOneUserAction = () => ({
  type: UsersActionsType.clearOneUser,
});
