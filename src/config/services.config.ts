import { ServiceConfig } from '../types';

export const services: ServiceConfig[] = [
  {
    route: '/auth',
    target: 'https://your-deployed-service.herokuapp.com/auth',
  },
  {
    route: '/users',
    target: 'https://your-deployed-service.herokuapp.com/users/',
  },
  {
    route: '/chats',
    target: 'https://your-deployed-service.herokuapp.com/chats/',
  },
  {
    route: '/payment',
    target: 'https://your-deployed-service.herokuapp.com/payment/',
  },
];