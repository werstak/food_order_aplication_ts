import React, { ReactElement, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import WelcomeScreen from 'screens/WelcomeScreen';
import SignInScreen from 'screens/SignInScreen';
import HomeScreen from 'screens/HomeScreen';
import CatalogScreen from 'screens/CatalogScreen';
import CartScreen from '../screens/CartScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import CallScreen from '../screens/CallScreen';
import ContactsScreen from '../screens/ContactsScreen';
import DeliveryTrackingScreen from '../screens/DeliveryTrackingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CategoryListScreen from '../screens/CategoryListScreen';

import { userLoggedInSelector } from 'store/selectors';
import { navigationRef } from './RootNavigation';
import FooterTabsBadge from '../components/FooterTabsBadge';
import ProductScreen from '../screens/ProductScreen';
import CategoryProductItem from '../components/CategoryProductItem';
import HistoryPurchaseScreen from '../screens/HistoryPurchaseScreen';
import OrderingScreen from '../screens/OrderingScreen';


export type StackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  Home: undefined;
  Catalog: undefined;
  CategoryList: undefined;
  ProductItem: undefined;
  Product: undefined;
  Cart: undefined;
  Ordering: undefined;
  Account: undefined;
  Call: undefined;
  Notification: undefined;
  Contacts: undefined;
  Delivery: undefined;
  History: undefined;
  Footer: undefined;
};

const headerShownConfiguration = {
  headerShown: false,
};

const Stack = createStackNavigator<StackParamList>();

export default function MainNavigator(): ReactElement {
  const isLoggedIn = useSelector(userLoggedInSelector);

  const renderContent = useCallback(() => {
    if (!isLoggedIn) {
      return (
        <>
          <Stack.Screen
            options={headerShownConfiguration}
            name={'Welcome'}
            component={WelcomeScreen}
          />
          <Stack.Screen
            name={'SignIn'}
            options={headerShownConfiguration}
            component={SignInScreen}
          />
        </>
      );
    }

    return (
      <>
        <Stack.Screen name={'Home'} options={{ title: 'Home' }} component={HomeScreen} />
        <Stack.Screen name={'Catalog'} options={headerShownConfiguration} component={CatalogScreen} />
        <Stack.Screen name={'CategoryList'} options={headerShownConfiguration} component={CategoryListScreen} />
        <Stack.Screen name={'Product'} component={ProductScreen} />
        <Stack.Screen name={'ProductItem'} component={CategoryProductItem} />
        <Stack.Screen name={'Cart'} component={CartScreen} />
        <Stack.Screen name={'Ordering'} component={OrderingScreen} />
        <Stack.Screen name={'Account'} component={UserAccountScreen} />
        <Stack.Screen name={'Call'} component={CallScreen} />
        <Stack.Screen name={'Notification'} component={NotificationScreen} />
        <Stack.Screen name={'Contacts'} component={ContactsScreen} />
        <Stack.Screen name={'Delivery'} component={DeliveryTrackingScreen} />
        <Stack.Screen name={'History'} component={HistoryPurchaseScreen} />
        <Stack.Screen name={'Footer'} component={FooterTabsBadge} />
      </>
    )
  }, [isLoggedIn]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">{renderContent()}</Stack.Navigator>
    </NavigationContainer>
  );
}
