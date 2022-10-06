import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import About from "../pages/About";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: "/",
      element: <HomePage {...props} />,
    },
    {
      path: "/auth/signup",
      element: <Signup {...props} />,
    },

    {
      path: "/auth/login",
      element: <Login {...props} />,
    },
    {
      path: "/about",
      element: user ? (
        <About {...props} />
      ) : (
        <Navigate to={"/auth/login"} replace />
      ),
    },
  ];
};

export default routes;
