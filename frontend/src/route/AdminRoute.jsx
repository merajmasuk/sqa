import { Navigate, useLocation } from "react-router";
// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    const location = useLocation();
    if(userInfo.role=='admin'){
        return children;
    }
    return <Navigate to={"/"} state={{from: location}} replace></Navigate>
};

export default AdminRoute;