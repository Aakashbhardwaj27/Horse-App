import IToastsState from './models/IToastsState';
import * as ToastsAction from './ToastsAction';
import IToast from './models/IToast';
import baseReducer from 'utility/baseReducer';
import { Reducer } from 'redux';

export const initialState: IToastsState = {
  items: [],
};

const toastsReducer: Reducer = baseReducer(initialState, {
  [ToastsAction.ADD_TOAST](state: IToastsState, action:any): IToastsState {
    return {
      ...state,
      items: [...state.items, action.payload!],
    };
  },

  [ToastsAction.REMOVE_TOAST](state: IToastsState, action: any): IToastsState {
    const toastId: string = action.payload!;

    return {
      ...state,
      items: state.items.filter((model: IToast) => model.id !== toastId),
    };
  },
});

export default toastsReducer;
