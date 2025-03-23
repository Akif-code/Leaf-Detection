/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import React, { useReducer, useEffect } from "react";
import authReducer, { ActionType, initialContext } from "./authReducer";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  updateProfile,
  updateEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase";

export const initialAuthContext = {
  user: null,
  isLoading: true,
  isLoggedIn: false,
  isError: false,
  message: "No Message.",
  errorMessage: "No Error Message.",
  signup: async (
    _name,
    _phone,
    _email,
    _password,
    _securityKey,
  ) => {},
  signin: async (_email, _password, _remember) => {},
  signout: async () => {},
  updateUser: async (
    _name,
    _contact,
    _email,
    _role,
    _photoUrl,
  ) => {},
  sendPasswordRecoveryEmail: async (_email) => {},
  confirmPasswordRecoveryCode: async (
    _code,
    _newPassword,
  ) => {},
  clearError: () => {},
};

export const AuthContext = createContext(initialAuthContext);

const AuthProvider = ({ children }) => {
  const [context, dispatch] = useReducer(authReducer, initialContext);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname)

  useEffect(() => {
    dispatch({
      type: ActionType.LOAD_USER_START,
      payload: { message: "Retrieving Auth Session..." },
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: ActionType.LOAD_USER_SUCCESS,
          payload: { user, message: "Auth Session Retrieved." },
        });
      } else {
        dispatch({
          type: ActionType.LOAD_USER_FAIL,
          payload: { errorMessage: "Auth Session Expired." },
        });

         // Only redirect to "/auth" if user is on a protected page
      if (pathname === "/home" || pathname === "/") {
        return
      }
      navigate("/auth");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (context.user) {
      if (pathname === "/auth") {
        navigate("/predict");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.user]);

  const signup = async (
    name,
    phone,
    email,
    password,
  ) => {
    try {
      dispatch({
        type: ActionType.CREATE_USER_START,
        payload: { message: "Registering User..." },
      });


  
        const userCreds = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await updateProfile(userCreds.user, {
          displayName: name,
          photoURL: `|||${"Admin"}|||${phone}`,
        });
        const user = userCreds.user;
        dispatch({
          type: ActionType.CREATE_USER_SUCCESS,
          payload: { user, message: "Registration Successful." },
        });
     
    } catch (error) {
      dispatch({
        type: ActionType.CREATE_USER_FAIL,
        payload: { errorMessage: (error).message },
      });
    }
  };

  const signin = async (email, password, remember) => {
    try {
      dispatch({
        type: ActionType.USER_SIGNIN_START,
        payload: { message: "Logging in..." },
      });

      await setPersistence(
        auth,
        remember ? browserLocalPersistence : browserSessionPersistence,
      );

      const userCreds = await signInWithEmailAndPassword(auth, email, password);

      const user = userCreds.user;

      dispatch({
        type: ActionType.USER_SIGNIN_SUCCESS,
        payload: { user, message: "Login Successful." },
      });
    } catch (error) {
      dispatch({
        type: ActionType.USER_SIGNIN_FAIL,
        payload: { errorMessage: (error).message },
      });
    }
  };

  const signout = async () => {
    try {
      dispatch({
        type: ActionType.USER_SIGNOUT_START,
        payload: { message: "Signing out..." },
      });

      await signOut(auth);

      dispatch({
        type: ActionType.USER_SIGNOUT_SUCCESS,
        payload: { message: "Signout Successful." },
      });
    } catch (error) {
      dispatch({
        type: ActionType.USER_SIGNOUT_FAIL,
        payload: { errorMessage: (error).message },
      });
    }
  };

  const sendPasswordRecoveryEmail = async (email) => {
    try {
      dispatch({
        type: ActionType.PASSWORD_RECOVERY_START,
        payload: { message: "Sending Password Recovery Email..." },
      });

      await sendPasswordResetEmail(auth, email, { url: window.origin });

      dispatch({
        type: ActionType.PASSWORD_RECOVERY_SUCCESS,
        payload: { message: "Password Recovery Email Sent." },
      });
    } catch (error) {
      dispatch({
        type: ActionType.PASSWORD_RECOVERY_FAIL,
        payload: { errorMessage: (error).message },
      });
    }
  };

  const confirmPasswordRecoveryCode = async (
    code,
    newPassword,
  ) => {
    try {
      dispatch({
        type: ActionType.PASSWORD_RECOVERY_START,
        payload: { message: "Resetting Password..." },
      });

      await confirmPasswordReset(auth, code, newPassword);

      dispatch({
        type: ActionType.PASSWORD_RECOVERY_START,
        payload: { message: "Password Reset Successful." },
      });
    } catch (error) {
      dispatch({
        type: ActionType.RESET_PASSWORD_FAIL,
        payload: { errorMessage: (error).message },
      });
    }
  };

  const updateUser = async (
    name,
    contact,
    email,
    role,
    photoUrl,
  ) => {
    try {
      dispatch({ type: ActionType.UPDATE_USER_START });

      const isEmailChanged = context.user?.email?.trim() !== email.trim();

      await updateProfile(context.user, {
        displayName: name,
        photoURL: `${photoUrl ?? ""}|||${role}|||${contact}`,
      });

      if (isEmailChanged) {
        await updateEmail(context.user, email.trim());
      }

      dispatch({ type: ActionType.UPDATE_USER_SUCCESS });
    } catch (error) {
      dispatch({
        type: ActionType.UPDATE_USER_FAIL,
        payload: { errorMessage: (error).message },
      });
    }
  };

  const clearError = () => {
    dispatch({
      type: ActionType.CLEAR_ERROR,
      payload: { errorMessage: "No Error Message." },
    });
  };

  const authContext = {
    ...context,
    signup,
    signin,
    signout,
    updateUser,
    sendPasswordRecoveryEmail,
    confirmPasswordRecoveryCode,
    clearError,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;