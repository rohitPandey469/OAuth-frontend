import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Auth from "./pages/Auth/Auth";
import Loader from "./components/Loader/Loader";
import { Navigate } from "react-router-dom";
import { useEffect, useState, useContext, useCallback } from "react";
import { UserContext } from "./context/UserContext";
// webpack

const App = () => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true); // for loaders
  const [userContext, setUserContext] = useContext(UserContext);

  useEffect(() => {
    const getUser = () => {
      // oauth - fetch
      // `${import.meta.env.REACT_APP_API_ENDPOINT}/auth/login/success`
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          setSpinner(false); // stop the spinner
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  // local auth - data fetch
  const verifyUser = useCallback(() => {
    // On page refresh - fetching the data
    fetch("http://localhost:5000/users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUserContext((oldValues) => {
          return { ...oldValues, token: data.token };
        });
      } else {
        setUserContext((oldValues) => {
          return { ...oldValues, token: null };
        });
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000);
    });
  }, [setUserContext]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              // user || userContext.token ? (
              //   <Navigate to="/" replace={true} />
              // ) : (
              //   <Auth />
              // )
              // !user && !userContext.token?(
              //   <Auth/>:(
              //   )
              // )
              userContext.token === null ? (
                !user ? (
                  <Auth />
                ) : (
                  <Navigate to="/" replace={true} />
                )
              ) : userContext.token ? (
                <Navigate to="/" replace={true} />
              ) : (
                <Loader />
              )
            }
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" replace={true} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
