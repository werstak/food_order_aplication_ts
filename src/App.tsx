import React, { ReactElement } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

import store, { persistor } from './store';
import MainNavigator from 'navigation';
import { StoreContext } from 'redux-react-hook';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <StoreContext.Provider value={store}>
        <PersistGate persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </StoreContext.Provider>
    </Provider>
  );
};

// const App = (): ReactElement => {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <MainNavigator />
//       </PersistGate>
//     </Provider>
//   );
// };

export default App;
