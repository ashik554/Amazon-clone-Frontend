import React from "react";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const registerInHandler = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.loginLogo}
          src="https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png"
          alt=""
        />
      </Link>
      <div className={classes.loginContainer}>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={emailChangeHandler} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button
            className={classes.signInBtn}
            onClick={signInHandler}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className={classes.regisrtationBtn}
          onClick={registerInHandler}
          type="submit"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   // const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const emailRef = useRef();
//   // const passwordRef = useRef();

//   const emailChangeHandler = (event) => {
//     setEmail(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setPassword(event.target.value);

//   const signInHandler = (event) => {
//     event.preventDefault();

//     /// using firebase login
//   };

//   const registerInHandler =  (event) => {
//     event.preventDefault();
//     // create a user using email and password

//     //
//   };
//   return (
//     <div className={classes.login}>
//       <Link to="/">
//         <img
//           className={classes.loginLogo}
//           src="https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png"
//           alt=""
//         />
//       </Link>
//       <div className={classes.loginContainer}>
//         <h1>Sign-in</h1>
//         <form>
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}

//            onChange={emailChangeHandler}
//           />
//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}

//             onChange={passwordChangeHandler}
//           />
//           <button
//             className={classes.signInBtn}
//             onClick={signInHandler}
//             type="submit"
//           >
//             Sign In
//           </button>
//         </form>
//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>
//         <button
//           className={classes.regisrtationBtn}
//           onClick={registerInHandler}
//           type="submit"
//         >
//           Create your Amazon Account
//         </button>
//       </div>
//     </div>

//   )
// };
// export default Login;
