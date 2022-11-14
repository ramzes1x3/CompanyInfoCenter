import { IController } from "./controller";

export enum RequestMethod {
    get = 'get',
    post = 'post',
    put = 'put',
    delete = 'delete',
}

export enum ActionOnEntity {
    add = 'add',
    change = 'change',
    delete = 'delete',
}

export interface Route {
    path: string,
    controller: IController,
    method: RequestMethod,
}