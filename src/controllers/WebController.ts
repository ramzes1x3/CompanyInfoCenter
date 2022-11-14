import { Response, Request, NextFunction } from 'express';
import { reqQueryParamTypes } from '../abstracts/query';
import { IView } from '../abstracts/view';
import ExistenceEntityError from '../errors/ExistenceEntityError.js';
import IdUrlParameterError from '../errors/IdUrlParameterError.js';
import WrongFormatError from '../errors/WrongFormatIdError.js';
import AbstractController from './AbstractController.js';

export default class WebController extends AbstractController {
    protected renderPage(view: IView, res: Response, req: Request) {
        res.render(
            view.getTemplate(),
            {
                'this': view,
                isLoggedIn: req.session.isLoggedIn,
                userId: req.session.workerId,
                errMessage: req.query.errMessage,
                csrfToken: req.session.csrf,
            }
        );
    }

    protected getParamError(paramName: string, param?: reqQueryParamTypes,): Error {
        const errorMessage = !param ? `The ${paramName } parameter is missing` : `The format of the ${paramName } is incorrect`;

        return new IdUrlParameterError(errorMessage);
    }

    protected handleWebError(err: any, res: Response, paramName: string, next: NextFunction, param: string | undefined) {
        if (err instanceof WrongFormatError) {
            return next(this.getParamError(paramName, param));
        }

        if (err instanceof ExistenceEntityError) {
            res.redirect('/404');

            return;
        }

        return next(err);
    }
}