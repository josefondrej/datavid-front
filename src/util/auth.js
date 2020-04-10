import React, { useState, useEffect, useContext, createContext } from "react";
import Auth0 from "auth0-js";

/*
    [BASIC SETUP INSTRUCTIONS]:
    - Create a new Auth0 application and choose type "Single Page Web Applications"
    - Go to your app's setting and add the domain and clientId to the code below
      where it says "Replace me".
    - In your app's settings scroll to the bottom, click "Show Advanced Settings",
      go to the "Grant Types" tab, check the "Password" option, then click save.
    - In your app settings you must add your domain in both the "Allowed Web Origins" and 
      "Allowed Origins (CORS)" sections. For example, to enable auth for local development, 
      CodeSandbox (an online IDE), and production you'd add the following: http://localhost:3000, 
      https://*.csb.app, https://mydomain.com.
    - Users will be asked to verify their email after signing up. You can customize 
      this email template in Dashboard → Emails → Templates.
      Keep in mind you'll need to specify an email provider before custom templates work.
    - When a user requests to reset their password (calls the sendPasswordResetEmail method), 
      they will receive an email from Auth0 that takes them to an Auth0 hosted interface for 
      changing their password. You can customize this email template in Dashboard → Emails → Templates.
    - By default Auth0 has strict password rules (must be 8 or more chars, etc). 
      You can adjust this in your Auth0 dashboard → Connections → Database → 
      Username-Password-Authentication → Password Policy.
    [ENABLING SOCIAL AUTH]
    - Update /public/auth0-popup-callback.html with your Auth0 domain and clientID.
    - In your app's settings add the following to "Allowed Callback URLs": 
      http://localhost:3000/auth0-popup-callback.html, https://mydomain.com/auth0-popup-callback.html 
      Replace "localhost:3000" and "mydomain" with your dev and production domains.
    - Enable auth providers you want to use in Auth0 Connections -> Social. For each
      provider make sure to enable that provider for your Auth0 app in the "Applications" tab of the popup.
    - For Twitter, getting the email address requires some extra setup. Instructions: https://bit.ly/2H0e08M
    - Disable the extra Auth0 consent screen by going to APIs -> Auth0 Management API -> scroll to bottom
      and enable Allow Skipping User Consent.
  */

const auth0Realm = "Username-Password-Authentication";
const auth0 = new Auth0.WebAuth({
  domain: "dev-646wg9mg.auth0.com", // Replace me
  clientID: "uLk8AYBk02Exm14gk8GQpYDmrCxeKTcx", // Replace me
  responseType: "token id_token",
  scope: "openid profile email"
});

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and update when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    return new Promise((resolve, reject) => {
      auth0.signup(
        {
          connection: auth0Realm,
          email: email,
          password: password
        },
        (error, response) => {
          if (error) {
            reject(new CustomError(error.code, getErrorMessage(error)));
          } else {
            // Automatically signin the user
            signin(email, password).then(() => {
              resolve();
            });
          }
        }
      );
    });
  };

  const signin = (email, password) => {
    return new Promise((resolve, reject) => {
      auth0.client.login(
        {
          realm: auth0Realm,
          username: email,
          password: password
        },
        (error, response) => {
          if (error) {
            reject(new CustomError(error.code, getErrorMessage(error)));
          } else {
            // Store access token in local storage
            window.localStorage.setItem("access_token", response.accessToken);

            getCurrentUser().then(user => {
              setUser(user);
              resolve(user);
            });
          }
        }
      );
    });
  };

  const signinWithProvider = providerName => {
    return new Promise((resolve, reject) => {
      const connectionNames = {
        google: "google-oauth2",
        facebook: "facebook",
        twitter: "twitter",
        github: "github"
      };

      // Get current domain
      const domain =
        window.location.protocol +
        "//" +
        window.location.hostname +
        (window.location.port ? ":" + window.location.port : "");

      auth0.popup.authorize(
        {
          redirectUri: `${domain}/auth0-popup-callback.html`,
          connection: connectionNames[providerName]
        },
        (error, response) => {
          if (error) {
            console.log("ERROR", error);
            reject(new CustomError(error.code, getErrorMessage(error)));
          } else {
            // Store access token in local storage
            window.localStorage.setItem("access_token", response.accessToken);

            getCurrentUser().then(user => {
              setUser(user);
              resolve(user);
            });
          }
        }
      );
    });
  };

  const signout = () => {
    window.localStorage.removeItem("access_token");
    setUser(false);
  };

  const sendPasswordResetEmail = email => {
    return new Promise((resolve, reject) => {
      auth0.changePassword(
        {
          connection: "Username-Password-Authentication",
          email: email
        },
        (error, response) => {
          if (error) {
            return reject(error);
          } else {
            resolve(true);
          }
        }
      );
    });
  };

  // This method is not needed with Auth0 but added in case your exported Divjoy ...
  // ... template makes a call to auth.confirmPasswordReset().
  const confirmPasswordReset = (password, code) => {
    return Promise.reject(
      new CustomError(
        "not_needed",
        "Auth0 handles the password reset flow for you. You can remove this section or page."
      )
    );
  };

  // Get the current user using stored access_token
  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const accessToken = window.localStorage.getItem("access_token");
      if (accessToken) {
        auth0.client.userInfo(accessToken, (error, user) => {
          if (error) {
            reject(error);
          } else {
            console.log("getCurrentUser", user);
            resolve(user);
          }
        });
      } else {
        resolve(false);
      }
    });
  };

  // Get user on mount
  useEffect(() => {
    getCurrentUser().then(user => {
      setUser(user);
    });
  }, []);

  return {
    user,
    signup,
    signin,
    signinWithProvider,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

function getErrorMessage(error) {
  // Find a human readable error message in an Auth0 error object
  // Unfortunately it's different depending on API call
  if (typeof error.message === "string") {
    return error.message;
  } else if (typeof error.description === "string") {
    return error.description;
  } else if (typeof error.original === "string") {
    return error.original;
  } else {
    // As a backup use error.code ("invalid_password", etc).
    return error.code;
  }
}

function CustomError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}
