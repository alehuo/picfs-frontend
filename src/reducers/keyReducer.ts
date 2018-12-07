import { Reducer } from "redux";
import { ThunkDispatch } from "redux-thunk";
import KeyService from "./../services/KeyService";
import { errorMessage } from "./notificationReducer";

export interface KeyState {
  readonly keys: any[];
  readonly keyTypes: any[];
  readonly isAdding: boolean;
  readonly modalOpen: boolean;
}

const initialState = {
  keys: [],
  keyTypes: [],
  isAdding: false,
  modalOpen: false,
};

export const keyActions = {
  ADD_KEY: "ADD_KEY",
  SET_KEYS: "SET_KEYS",
  SET_KEY_TYPES: "SET_KEY_TYPES",
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

export const toggleModal = (val: string) => {
  return {
    type: keyActions.TOGGLE_MODAL,
    val,
  };
};

export const fetchKeys = (token: string) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const res = await KeyService.getKeys(token);
      dispatch(setKeys(res));
    } catch (err) {
      if (err.response && err.response.data.error) {
        dispatch(errorMessage(err.response.data.error));
      } else {
        // If the response doesn't contain an error key, the back-end might be down
        dispatch(errorMessage("Failed to fetch keys"));
      }
    }
  };
};

export const fetchKeyTypes = (token: string) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const res = await KeyService.getKeyTypes(token);
      dispatch(setKeyTypes(res));
    } catch (err) {
      if (err.response && err.response.data.error) {
        dispatch(errorMessage(err.response.data.error));
      } else {
        // If the response doesn't contain an error key, the back-end might be down
        dispatch(errorMessage("Failed to fetch key types"));
      }
    }
  };
};

export const setKeys = (keys: any[]) => {
  return {
    type: keyActions.SET_KEYS,
    keys,
  };
};

export const setKeyTypes = (keyTypes: any[]) => {
  return {
    type: keyActions.SET_KEY_TYPES,
    keyTypes,
  };
};

const keyReducer: Reducer<KeyState, any> = (state = initialState, action) => {
  switch (action.type) {
    case keyActions.SET_KEYS:
      return { ...{}, ...state, keys: action.keys };
    case keyActions.SET_KEY_TYPES:
      return { ...{}, ...state, keyTypes: action.keyTypes };
    case keyActions.TOGGLE_MODAL:
      return { ...{}, ...state, modalOpen: action.val };
    default:
      return state;
  }
};

export default keyReducer;
