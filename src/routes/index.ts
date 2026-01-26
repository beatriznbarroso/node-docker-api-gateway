import { Express } from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { ServiceConfig } from '../types';

export const setupRoutes = (app: Express, services: ServiceConfig[]): void => {
  services.forEach(({ route, target }) => {
    const proxyOptions: Options = {
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^${route}`]: '',
      },
    };

    app.use(route, createProxyMiddleware(proxyOptions));
  });

  // 404 handler - must be last
  app.use((_req, res) => {
    res.status(404).json({
      code: 404,
      status: 'Error',
      message: 'Route not found.',
      data: null,
    });
  });
};