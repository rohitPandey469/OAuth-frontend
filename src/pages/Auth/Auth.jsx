import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  // loaders
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);

  // OAuths
  const google = () => {
    setIsSubmitting(true);
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const linkedin = () => {
    setIsSubmitting(true);
    window.open("http://localhost:5000/auth/linkedin", "_self");
  };

  // For local auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    /////// DO client side validation of username and password

    if (!isSignUp) {
      // login
      // import.meta.env.REACT_APP_API_ENDPOINT + "/users/login"
      fetch("http://localhost:5000/users/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        // send all the details to the backend
        body: JSON.stringify({ username: email, password }),
      })
        .then(async (response) => {
          setIsSubmitting(false); // stop the loader
          if (!response.ok) {
            if (response.status === 400) {
              setError("Please fill all the fields correctly!");
            } else if (response.status === 401) {
              setError("Invalid email and password combination.");
            } else {
              setError(genericErrorMessage);
            }
          } else {
            const data = await response.json();
            // something else
            setUserContext((oldValues) => {
              // addition of accessToken
              return { ...oldValues, token: data.token };
            });
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          setError(genericErrorMessage);
        });
    } else {
      // register
      fetch("http://localhost:5000/users/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName, username: email, password }),
      })
        .then(async (response) => {
          setIsSubmitting(false);
          if (!response.ok) {
            if (response.status === 400) {
              setError("Please fill all the fields correctly!");
            } else if (response.status === 401) {
              setError("Invalid email and password combination.");
            } else if (response.status === 500) {
              console.log(response);
              const data = await response.json();
              if (data.message) setError(data.message || genericErrorMessage);
            } else {
              setError(genericErrorMessage);
            }
          } else {
            const data = await response.json();
            setUserContext((oldValues) => {
              return { ...oldValues, token: data.token };
            });
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          setError(genericErrorMessage);
        });
    }
  };

  const genericErrorMessage = "Something went wrong! Please try again later.";

  return (
    <div className="login">
      {error && (
        <div
          style={{ backgroundColor: "red", color: "white", fontSize: "20px" }}
        >
          {error}
        </div>
      )}
      <h1  className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src="" alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={linkedin}>
            <img src="" alt="" className="icon" />
            LinkedIn
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form onSubmit={handleSubmit} className="right">
          {isSignUp ? (
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Name"
            />
          ) : (
            ""
          )}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button disabled={isSubmitting} className="submit" type="submit">
            {!isSignUp ? "Login" : "Signup"}
          </button>
        </form>
        <p>
          New to Dizania
          <button onClick={() => setIsSignUp((value) => !value)}>{!isSignUp?"Signup":"Login"}</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
