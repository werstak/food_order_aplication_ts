import {combineReducers, CombinedState} from 'redux';

import auth, {IAuthState} from './auth';
import products, {IProductState} from './productReducer';
import productsCart, { IProductCartState } from './productCartReducer';


export type ICombinedState = CombinedState<{
  auth: IAuthState;
  products: IProductState;
  productsCart: IProductCartState;
}>;

export default combineReducers({
  auth,
  products,
  productsCart,
});
