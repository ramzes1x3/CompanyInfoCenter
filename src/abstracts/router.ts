import { Router } from 'express';
export interface IRouter {
    createRoutes: () => void,
    getRouter: () => Router,
}