export const ActionType = {
  CREATE_USER_START : "CREATE_USER_START",
  CREATE_USER_SUCCESS : "CREATE_USER_SUCCESS",
  CREATE_USER_FAIL : "CREATE_USER_FAIL",
  USER_SIGNIN_START : "USER_SIGNIN_START",
  USER_SIGNIN_SUCCESS : "USER_SIGNIN_SUCCESS",
  USER_SIGNIN_FAIL : "USER_SIGNIN_FAIL",
  LOAD_USER_START : "LOAD_USER_START",
  LOAD_USER_SUCCESS : "LOAD_USER_SUCCESS",
  LOAD_USER_FAIL : "LOAD_USER_FAIL",
  USER_SIGNOUT_START : "USER_SIGNOUT_START",
  USER_SIGNOUT_SUCCESS : "USER_SIGNOUT_SUCCESS",
  USER_SIGNOUT_FAIL : "USER_SIGNOUT_FAIL",
  UPDATE_USER_START : "UPDATE_USER_START",
  UPDATE_USER_SUCCESS : "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAIL : "UPDATE_USER_FAIL",
  PASSWORD_RECOVERY_START : "PASSWORD_RECOVERY_START",
  PASSWORD_RECOVERY_SUCCESS : "PASSWORD_RECOVERY_SUCCESS",
  PASSWORD_RECOVERY_FAIL : "PASSWORD_RECOVERY_FAIL",
  RESET_PASSWORD_START : "RESET_PASSWORD_START",
  RESET_PASSWORD_SUCCESS : "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAIL : "RESET_PASSWORD_FAIL",
  CLEAR_ERROR : "CLEAR_ERROR",
}



export const initialContext = {
  user: null,
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  message: "No Message.",
  errorMessage: "No Error Message.",
};

const authReducer = (context = initialContext, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.CREATE_USER_START:
      return {
        ...context,
        isLoading: true,
        message: payload?.message,
      };
    case ActionType.CREATE_USER_SUCCESS:
      return {
        ...context,
        user: payload?.user,
        isLoading: false,
        isLoggedIn: true,
        message: payload?.message,
      };
    case ActionType.CREATE_USER_FAIL:
      return {
        ...context,
        isLoading: false,
        isLoggedIn: false,
        isError: true,
        errorMessage: payload?.errorMessage,
      };
    case ActionType.UPDATE_USER_START:
      return {
        ...context,
        isLoading: true,
      };
    case ActionType.UPDATE_USER_SUCCESS:
      return {
        ...context,
        isLoading: false,
      };
    case ActionType.UPDATE_USER_FAIL:
      return {
        ...context,
        isLoading: false,
        isError: true,
        errorMessage: payload?.errorMessage,
      };
    case ActionType.USER_SIGNIN_START:
      return {
        ...context,
        isLoading: true,
        message: payload?.message,
      };
    case ActionType.USER_SIGNIN_SUCCESS:
      return {
        ...context,
        user: payload?.user,
        isLoading: false,
        isLoggedIn: true,
      };
    case ActionType.USER_SIGNIN_FAIL:
      return {
        ...context,
        isLoading: false,
        isLoggedIn: false,
        isError: true,
        errorMessage: payload?.errorMessage,
      };
    case ActionType.LOAD_USER_START:
      return {
        ...context,
        isLoading: true,
        message: payload?.message,
      };
    case ActionType.LOAD_USER_SUCCESS:
      return {
        ...context,
        user: payload?.user,
        isLoading: false,
        isLoggedIn: true,
        message: payload?.message,
      };
    case ActionType.LOAD_USER_FAIL:
      return {
        ...context,
        user: null,
        isLoading: false,
        isLoggedIn: false,
        isError: false,
        errorMessage: payload?.errorMessage,
      };
    case ActionType.USER_SIGNOUT_START:
      return {
        ...context,
        isLoading: true,
        message: payload?.message,
      };
    case ActionType.USER_SIGNOUT_SUCCESS:
      return {
        ...context,
        isLoading: false,
        isLoggedIn: false,
        message: payload?.message,
      };
    case ActionType.USER_SIGNOUT_FAIL:
      return {
        ...context,
        isLoading: false,
        isError: true,
        errorMessage: payload?.errorMessage,
      };
    case ActionType.PASSWORD_RECOVERY_START:
      return {
        ...context,
        isLoading: true,
        message: payload?.message,
      };
    case ActionType.PASSWORD_RECOVERY_SUCCESS:
      return {
        ...context,
        isLoading: false,
        message: payload?.message,
      };
    case ActionType.PASSWORD_RECOVERY_FAIL:
      return {
        ...context,
        isLoading: false,
        isError: true,
        errorMessage: payload?.errorMessage,
      };
    case ActionType.RESET_PASSWORD_START:
      return {
        ...context,
        isLoading: true,
        message: payload?.message,
      };
    case ActionType.RESET_PASSWORD_SUCCESS:
      return {
        ...context,
        isLoading: false,
        message: payload?.message,
      };
    case ActionType.RESET_PASSWORD_FAIL:
      return {
        ...context,
        isLoading: false,
        isError: true,
        errorMessage: payload?.errorMessage,
      };
    case ActionType.CLEAR_ERROR:
      return {
        ...context,
        isError: false,
        errorMessage: payload?.errorMessage,
      };
    default:
      return context;
  }
};

export default authReducer;