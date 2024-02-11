import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import WrongRoute from "./route/WrongRoute";
import CommitteeEntry from "./pages/Committee/CommiitteeEntry";
import EventCommitteeEntry from "./pages/EventCommittee/EventCommitteeEntry";
import EventSponsorEntry from "./pages/EventSponsor/EventSponsorEntry";
import EventEntry from "./pages/Event/EventEntry";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Discussion from "./pages/Discussion/Discussion";

const App=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    errorElement:<WrongRoute/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"committeeEntry",
        element:<CommitteeEntry/>
      },
      {
        path:"eventEntry",
        element:<EventEntry/>
      },
      {
        path:"sponsorEntry",
        element:<EventSponsorEntry/>
      },
      {
        path:"eventCommitteeEntry",
        element:<EventCommitteeEntry/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signUp",
        element:<SignUp/>
      },
      {
        path:"discussion",
        element:<Discussion/>
      }
    ]
  },
])
export default App;