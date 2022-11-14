import path from 'path';
import { Liquid } from 'liquidjs';
import bodyParser from 'body-parser';
import session from 'express-session';
import { IRouter } from './abstracts/router';
import express, { Express } from 'express';
import { Request, Response, NextFunction } from 'express';

export default class App {
    private app: Express;

    constructor() {
        this.app = express();
        this.app.use(express.static(global.__dirname + '/'));
    }

    public initAllRouters(routers: IRouter[]) {
        routers.forEach((router: IRouter) => {
            this.app.use(router.getRouter());
        });
    }

    public initLiquid() {
        const engine = new Liquid();

        this.app.engine('liquid', engine.express());
        this.app.set('views', path.resolve(__dirname, 'templates'));
        this.app.set('view engine', 'liquid');
    }

    public initBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    public initHandlerError() {
        this.app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
            res
                .status(500)
                .render(
                    global.__dirname + '/templates/page500',
                    { errMessage: err.message }
                );
        });
    }

    public initSession() {
        this.app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 1200000, 
            },
        }));
    }

    public startListener(port: number | string) {
        this.app.listen(port,() => {
            console.log(`Server has been started on port ${port}...`);
        });
    }
}