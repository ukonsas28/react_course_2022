import { RootReducerType } from '../rootType';

export const getUsers = (state: RootReducerType) => state.users.data.results;
export const getOneUser = (state: RootReducerType) => state.users.oneUserData;
