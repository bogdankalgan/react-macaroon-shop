import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext";
import {useEffect} from "react";

function ProtectedRoute({children}) {
    const {user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            if (location.pathname.startsWith("/admin")) {
                navigate("/login", {replace: true});
            }
        }
    }, [user, navigate, location.pathname]);

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    return children;
}

export default ProtectedRoute;
