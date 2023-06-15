import { RootReducerName } from '@reduxs/reducers/type'
import { User } from '@reduxs'
export const getUserData = (state: {
 root: {[RootReducerName.user]: User}
}) => state.root.user