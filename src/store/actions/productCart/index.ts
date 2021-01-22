import { createAction } from 'redux-act';

export const getProductActionCart = createAction('Get Product Action Cart');
export const addProductActionCart = createAction<IProduct>('Add Product Action Cart');
export const dellProductActionCart = createAction<number>('Dell Product Action Cart');
export const setProductActionCartError = createAction<string>('Set Product Action Cart Error');
export const setTotalCounterAction = createAction('Set Total Counters Action Cart');
export const incrementProductCounterAction = createAction<number>('Increment Product Counter Action Cart');
export const decrementProductCounterAction = createAction<number>('Decrement Product Counter Action Cart');
