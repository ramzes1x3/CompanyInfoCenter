import { fileURLToPath } from 'url';
import { dirname } from 'path';
import App from './App.js';
import 'reflect-metadata';
import BuildingRouter from './routes/BuildingRouter.js';
import OfficeRouter from './routes/OfficeRouter.js';
import CompanyRouter from './routes/CompanyRouter.js';
import CityRouter from './routes/CityRouter.js';
import CountryRouter from './routes/CountryRouter.js';
import WorkerRouter from './routes/WorkerRouter.js';
import IndexRouter from './routes/IndexRouter.js';
import BuildingApiRouter from './routes/apiRouters/BuildingApiRouter.js';
import CompanyApiRouter from './routes/apiRouters/CompanyApiRouter.js';
import OfficeApiRouter from './routes/apiRouters/OfficeApiRouter.js';
import CacheApiRouter from './routes/apiRouters/CacheApiRouter.js';
import Page404Router from './routes/Page404Router.js';
import { IRouter } from './abstracts/router.js';
import DiContainer from './models/DiContainer.js';

const __filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

const port = process.env.port ?? 3020;
const app = new App();

DiContainer.initBind();

const routers: IRouter[] = [ 
    new IndexRouter(),
    new BuildingRouter(),
    new OfficeRouter(),
    new CompanyRouter(),
    new CityRouter(), 
    new CountryRouter(),
    new WorkerRouter(),
    new BuildingApiRouter(),
    new CompanyApiRouter(),
    new OfficeApiRouter(),
    new CacheApiRouter(),
    new Page404Router(),
];

app.initBodyParser();
app.initLiquid();
app.initSession();
app.initAllRouters(routers);
app.startListener(port);
app.initHandlerError();