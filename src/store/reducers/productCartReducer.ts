import { createReducer } from 'redux-act';
import {
  addProductActionCart,
  dellProductActionCart,
  setTotalCounterAction,
  setProductActionCartError, incrementProductCounterAction, decrementProductCounterAction
} from '../actions';
import IProduct, { IProductStatusCounters } from '../actions/product/IProduct';

export interface IProductCartState {
  productsCartList: IProduct[];
  counters: IProductStatusCounters;
  totalPrice: number,
  error?: string | null;
}

const initialState: IProductCartState = {
  productsCartList: [
    // {
    //   show: {
    //     id: 1,
    //     url: "http://www.tvmaze.com/shows/206/stargate-atlantis",
    //     name: "1 Stargate Atlantis",
    //     type: "1 Scripted",
    //     count: 1,
    //     language: "1 English",
    //     status: "1 Ended",
    //     runtime: 60,
    //     premiered: "2004-07-16",
    //     weight: 88,
    //     image: {
    //       medium: "http://static.tvmaze.com/uploads/images/medium_portrait/1/3059.jpg",
    //       original: "http://static.tvmaze.com/uploads/images/original_untouched/1/3059.jpg"
    //     },
    //     summary: "<p>Atlantis, built thousands of years ago by the highly evolved Ancients, is home base for an elite expedition from Earth. These courageous military commanders and scientists leap through the city's Stargate to explore the wondrous Pegasus galaxy and battle the treacherous Wraith, who seek control of Atlantis -- at any cost.</p>",
    //   }
    // },
    // {
    //   show: {
    //     id: 2,
    //     url: "http://www.tvmaze.com/shows/206/stargate-atlantis",
    //     name: "2 Stargate Atlantis",
    //     type: "2 Scripted",
    //     count: 1,
    //     language: "2 English",
    //     status: "2 Ended",
    //     runtime: 60,
    //     premiered: "2004-07-16",
    //     weight: 88,
    //     image: {
    //       medium: "http://static.tvmaze.com/uploads/images/medium_portrait/1/3069.jpg",
    //       original: "http://static.tvmaze.com/uploads/images/original_untouched/1/3069.jpg"
    //     },
    //     summary: "<p>Atlantis, built thousands of years ago by the highly evolved Ancients, is home base for an elite expedition from Earth. These courageous military commanders and scientists leap through the city's Stargate to explore the wondrous Pegasus galaxy and battle the treacherous Wraith, who seek control of Atlantis -- at any cost.</p>",
    //   }
    // },
    // {
    //   show: {
    //     id: 3,
    //     url: "http://www.tvmaze.com/shows/206/stargate-atlantis",
    //     name: "3 Stargate Atlantis",
    //     type: "3 Scripted",
    //     count: 1,
    //     language: "3 English",
    //     status: "3 Ended",
    //     runtime: 60,
    //     premiered: "2004-07-16",
    //     weight: 88,
    //     image: {
    //       medium: "http://static.tvmaze.com/uploads/images/medium_portrait/1/3070.jpg",
    //       original: "http://static.tvmaze.com/uploads/images/original_untouched/1/3070.jpg"
    //     },
    //     summary: "<p>Atlantis, built thousands of years ago by the highly evolved Ancients, is home base for an elite expedition from Earth. These courageous military commanders and scientists leap through the city's Stargate to explore the wondrous Pegasus galaxy and battle the treacherous Wraith, who seek control of Atlantis -- at any cost.</p>",
    //   }
    // },
  ],
  counters: {
    totalCounter: 0,
  },
  totalPrice: 0
};

const reducer = createReducer<IProductCartState>({}, initialState);

// const addProductsCartData = (_: any, payload: IProduct): IProductCartState => ({
//   ..._,
//   productsCartList: [..._.productsCartList, payload],
//   error: null,
// });


const addProductsCartData = (_: any, { product, count = 1 }: { product: IProduct, count: number }): IProductCartState => {

  // console.log("product", product);

  // console.log('listClone===', listClone);

  // const itemIdProd = payload.id;
  // console.log('payload', itemIdProd);
  //
  // const listClone = _.productsCartList.map(item => {
  //   if (item.id == itemIdProd && item.count == undefined) {
  //     item.count = 1;
  //     console.log('item.count 1 - ', item.count);
  //   }
  //   if (item.id == itemIdProd && item.count !== undefined) {
  //     console.log('item.count 2 - ', item.count);
  //     item.count++;
  //   }
  //   return {
  //     ..._,
  //     productsCartList: listClone,
  //   };
  //
  // });

  // const currentTotalCounter: IProductStatusCounters = _.counters;
  // console.log('currentTotalCounter===', currentTotalCounter);

  let cloned = [..._.productsCartList];

  const itemIndex = cloned.findIndex((p) => p.id === product.id);
  console.log('itemIndex', itemIndex);

  if (itemIndex !== -1) {
    cloned[itemIndex] = { ...cloned[itemIndex], count: Math.max(1, cloned[itemIndex].count + count) };
  } else {
    cloned = [...cloned, { ...product, count: 1 }];
  }

  return {
    ..._,
    productsCartList: cloned,
    counters: { totalCounter: cloned.reduce((acc, item) => acc += item.count, 0) },
    totalPrice: cloned.reduce((acc, item) => acc += item.weight, 0),
    error: null,
  };
};


const dellProductsCartData = (_: any, payload: number): IProductCartState => ({
  ..._,
  productsCartList: _.productsCartList.filter(item => item.id !== payload),
  error: null,
});

const productsCarError = (_: any, payload: string): IProductCartState => ({
  ..._,
  productsCartList: null,
  error: payload,
});

// const setTotalCounter = (_: any, payload: IProductStatusCounters): IProductCartState => {
//   const currentTotalCounter: IProductStatusCounters = _.counters;
//   console.log('currentTotalCounter===', currentTotalCounter);


//   // const itemId = payload;
//   // const listClone = _.productsCartList.map(item => {
//   //   if (item.id == itemId && item.count > 0) {
//   //     item.count--;
//   //   }
//   //   return {
//   //     ..._,
//   //     productsCartList: listClone,
//   //   };
//   // });


//   const currentTotalCounters: IProductStatusCounters = _.counters;
//   currentTotalCounters.totalCounter;

//   return {
//     ..._,
//     counters: currentTotalCounters,
//   };
// };

// const setTotalCounter = (_: any, payload: IProductStatusCounters): IProductCartState => ({
//   ..._,
//   counters: payload,
//   error: null,
// });


// const incrementProductCounter = (_: any, payload: number): IProductCartState => {
//   const itemId = payload;

//   const listClone = _.productsCartList.map(item => {
//     if (item.id == itemId && item.count !== undefined) {
//       item.count++;
//     }
//     if (item.id == itemId && item.count == undefined) {
//       item.count = 1;
//     }
//     return {
//       ..._,
//       productsCartList: listClone,
//     };
//   });

//   const currentTotalCounters: IProductStatusCounters = _.counters;
//   currentTotalCounters.totalCounter;

//   return {
//     ..._,
//     counters: currentTotalCounters,
//   };

// //===========
// // const itemId = payload;
// // console.log('ID ===========', itemId);
// // const listClone = _.productsCartList;
// // console.log('listClone =================', listClone);
// // const curentCountTotal = _.counters.countTotal;
// // console.log("curentCountTotal ============ ",curentCountTotal);
// // listClone.map(item => item.id === itemId ? 1 : 2);
// // console.log('listClone.map ===============', listClone);
// // return {
// //   ..._,
// //   productsCartList: listClone,
// // };
// //=================

// };


// const decrementProductCounter = (_: any, payload: number): IProductCartState => {
//   const itemId = payload;
//   const listClone = _.productsCartList.map(item => {
//     if (item.id == itemId && item.count > 0) {
//       item.count--;
//     }
//     return {
//       ..._,
//       productsCartList: listClone,
//     };
//   });

//   const currentTotalCounters: IProductStatusCounters = _.counters;
//   currentTotalCounters.totalCounter;

//   return {
//     ..._,
//     counters: currentTotalCounters,
//   };

// };

reducer.on(addProductActionCart, addProductsCartData);
reducer.on(dellProductActionCart, dellProductsCartData);
reducer.on(setProductActionCartError, productsCarError);
// reducer.on(setTotalCounterAction, setTotalCounter);
// reducer.on(incrementProductCounterAction, incrementProductCounter);
// reducer.on(decrementProductCounterAction, decrementProductCounter);
export default reducer;
