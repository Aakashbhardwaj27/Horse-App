import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import IAction from '../models/IAction';
import IError from '../models/IError';
import ToastStatusEnum from '../constants/ToastStatusEnum';
import * as ToastsAction from 'redux/store/toasts/ToastsAction';

const errorToastMiddleware = (): Middleware => (store: MiddlewareAPI<Dispatch>) => (next: Dispatch) => (action: IAction<any>): void => {
  if (action.error) {
    const errorAction = action as Required<IAction<IError>>;

    next(ToastsAction.add(errorAction.payload.message, ToastStatusEnum.Error));
  }

  next(action);
};

export default errorToastMiddleware;
