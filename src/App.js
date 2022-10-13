import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Error404 from "./components/Error";
import About from "./pages/About";
import TracingList from "./pages/TracingList";
import TracingDetails from "./pages/TracingDetails";
import EditTracking from "./pages/EditTracking";



export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
         path="/auth/signup"
         element={<Signup authenticate={authenticate}/>}
        />
        <Route
         path="/auth/login"
         element={<LogIn authenticate={authenticate}/>} />
         <Route path="*" element={<Error404/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/tracing" element={<TracingList/>}/>
         <Route path="/tracing/:id" element={<TracingDetails/>} /> 
         <Route path="/tracing/edit/:id" element={ <EditTracking/> } /> 
      </Routes>
    </div>
  );
}
