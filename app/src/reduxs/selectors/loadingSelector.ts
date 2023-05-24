import { RootReducerName } from '@reduxs/reducers/type';
import { LoadingType } from '@reduxs/types';

export const enableLoading = (state: { root: { [RootReducerName.loading]: LoadingType } }) => state.root.loading.enableLoading;