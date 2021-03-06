import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const OrderPage = lazy(() => import('../pages/OrderPage/OrderPage'));
const MyOrderPage = lazy(() => import('../pages/MyOrderPage/MyOrderPage'));

export const routePaths = {
  mainPage: '/',
  orderPage: '/order',
  myOrderPage: '/myOrder',
  parking: '/parking',
  insurance: '/insurance',
  benzine: '/benzine',
  service: '/service',
};

export const publicRoutes = [
  {
    path: routePaths.mainPage,
    exact: true,
    component: MainPage,
    label: 'Главная',
  },
  { path: routePaths.orderPage, exact: true, component: OrderPage, label: 'Бронирование авто' },
  {
    path: `${routePaths.myOrderPage}/:id`,
    exact: true,
    component: MyOrderPage,
    label: 'Мои заказы',
  },
  {
    path: routePaths.parking,
    exact: true,
    component: () => <div>Парковка</div>,
    label: 'Парковка',
  },
  {
    path: routePaths.insurance,
    exact: true,
    component: () => <div>Страховка</div>,
    label: 'Страховка',
  },
  {
    path: routePaths.benzine,
    exact: true,
    component: () => <div>Бензин</div>,
    label: 'Бензин',
  },
  {
    path: routePaths.service,
    exact: true,
    component: () => <div>Обслуживание</div>,
    label: 'Обслуживание',
  },
];
