import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import WrongRoute from "./route/WrongRoute";
import CommitteeEntry from "./pages/Committee/CommitteeEntry";
import EventCommitteeEntry from "./pages/EventCommittee/EventCommitteeEntry";
import EventSponsorEntry from "./pages/EventSponsor/EventSponsorEntry";
import EventEntry from "./pages/Event/EventEntry";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Discussion from "./pages/Discussion/Discussion";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Forum from "./pages/Forum/Forum";
import Payment from "./pages/Payment/Payment";
import Admin from "./pages/Dashboard/Admin";
import Revenue from "./pages/Dashboard/Revenue";
import PrivateRoute from "./route/PrivateRoute";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import AdminRoute from "./route/AdminRoute";
import ModeratorRoute from "./route/ModeratorRoute";
import Practice from "./pages/Practice/Practice";
import AllUser from "./pages/AllUsers/AllUsers";

import Example from "./pages/Example/Example";
import CoursesEntry from "./pages/Enrollment/CoursesEntry";


const App = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <WrongRoute />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "committeeEntry",
        element:<PrivateRoute><CommitteeEntry /></PrivateRoute>
      },
      {
        path: "eventEntry",
        element: <PrivateRoute><PrivateRoute><EventEntry /></PrivateRoute></PrivateRoute>
      },
      {
        path: "sponsorEntry",
        element: <PrivateRoute><ModeratorRoute><EventSponsorEntry/></ModeratorRoute></PrivateRoute>
      },
      {
        path: "eventCommitteeEntry",
        element:<PrivateRoute><AdminRoute><EventCommitteeEntry /></AdminRoute></PrivateRoute> 
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signUp",
        element: <SignUp />
      },
      {
        path: "discussion",
        element: <PrivateRoute><AdminRoute><Discussion/></AdminRoute></PrivateRoute>
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword />
      },
      {
        path: "forum",
        element: <Forum />
      },
      {
        path: "payment",
        element: <Payment />
      },
      {
        path: "resetPassword",
        element:<PrivateRoute><ResetPassword /></PrivateRoute> 
      },
      {
        path:"practice",
        element:<PrivateRoute><AdminRoute><Practice/></AdminRoute></PrivateRoute>
      },
      {
        path: "forum",
        element: <Forum />
      },
      {
        path: "payment",
        element: <Payment />
      },
      {
        path: "resetPassword",
        element:<PrivateRoute><ResetPassword /></PrivateRoute> 
      },
      {
        path: "resetPassword",
        element:<PrivateRoute><ResetPassword /></PrivateRoute> 
      },
      {
        path:"practice",
        element:<PrivateRoute><AdminRoute><Practice/></AdminRoute></PrivateRoute>
      },
      {
        path:"Example",
        element:<Example/>
      },
      {
        path:"CoursesEntry",
        element:<CoursesEntry/>
      }
    ]
  },
  {
    path: "/dashboard",
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:"/dashboard",
        element:<Admin></Admin>
      },
      {
        path: "revenue",
        element:<Revenue/>
      },
      {
        path: "allUser",
        element:<AllUser/>
      },
    ]
  }
])
export default App;