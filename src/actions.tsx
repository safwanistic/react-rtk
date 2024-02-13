import * as types from './actiontypes';


interface UserData {
  // Define the structure of the userData object
  // Example:
  username: string;
  email: string;
  password: string;
}

// Define the type for the payload in actions
interface ActionPayload {
  userData?: UserData;
  error?: string;
}

// Define action types
enum ActionTypes {
  REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE',
}

// Define action interfaces
interface RegisterUserRequestAction {
  type: ActionTypes.REGISTER_USER_REQUEST;
  payload: UserData;
}

interface RegisterUserSuccessAction {
  type: ActionTypes.REGISTER_USER_SUCCESS;
}

interface RegisterUserFailureAction {
  type: ActionTypes.REGISTER_USER_FAILURE;
  payload: string;
}

// Define the combined type for all actions
type UserActionTypes =
  | RegisterUserRequestAction
  | RegisterUserSuccessAction
  | RegisterUserFailureAction;

// Define action creators
export const registerUserRequest = (userData: UserData): RegisterUserRequestAction => ({
  type: ActionTypes.REGISTER_USER_REQUEST,
  payload: userData,
});

export const registerUserSuccess = (): RegisterUserSuccessAction => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
});

export const registerUserFailure = (error: string): RegisterUserFailureAction => ({
  type: ActionTypes.REGISTER_USER_FAILURE,
  payload: error,
});
