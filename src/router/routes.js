import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const OrderPage = lazy(() => import('../pages/OrderPage/OrderPage'));

export const routePaths = {
  mainPage: '/',
  orderPage: '/order',
};

export const publicRoutes = [
  {
    path: routePaths.mainPage,
    exact: true,
    component: MainPage,
    label: 'Главная',
  },
  { path: routePaths.orderPage, exact: true, component: OrderPage, label: 'Бронирование авто' },
];
