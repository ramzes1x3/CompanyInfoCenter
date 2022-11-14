import 'express-session';

declare module 'express-session' {
    export interface SessionData {
        isLoggedIn: boolean,
        workerId: string | number,
        csrf: string,
    }
}