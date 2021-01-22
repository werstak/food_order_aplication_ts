import { createReducer } from 'redux-act';
import { setProductAction, setProductActionError } from '../actions';
import IProduct from '../actions/product/IProduct';

export interface IProductState {
  products: IProduct[];
  error?: string | null;
}

const initialState: IProductState = {
  products: [] = [],
};

const reducer = createReducer<IProductState>({}, initialState);

const productsData = (_: any, payload: IProduct[]): IProductState => ({
  ..._,
  products: payload,
  error: null,
});

const productsError = (_: any, payload: string): IProductState => ({
  ..._,
  products: null,
  error: payload,
});


reducer.on( setProductAction, productsData );
reducer.on( setProductActionError, productsError );
export default reducer;
