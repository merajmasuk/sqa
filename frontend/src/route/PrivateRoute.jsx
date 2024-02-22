import { Navigate, useLocation } from "react-router";
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const location = useLocation();
    if(userInfo){
        return children;
    }
    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default PrivateRoute;