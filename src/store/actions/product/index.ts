import { createAction } from 'redux-act';

import IProduct from './IProduct';

export const getProductAction = createAction('Get Product Action');
export const setProductAction = createAction<IProduct[]>('Set Product Action');
export const setProductActionError = createAction<string>('Set Product Action Error');
