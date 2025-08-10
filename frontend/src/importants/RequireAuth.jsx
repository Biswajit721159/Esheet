import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const user = useSelector((state) => state.users);
    if (!user) {
        return (
            <Navigate to="/login" />
        )
    }
    return (
        <>
            {children}
        </>
    )
}
export default RequireAuth;