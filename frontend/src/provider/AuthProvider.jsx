import { createContext } from "react";
export const AuthContext = createContext(null);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const authInfo = {
        user: JSON.parse(localStorage.getItem('userInfo')),
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

