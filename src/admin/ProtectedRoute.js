import {Navigate} from "react-router-dom";
import {useAuth} from "./AuthContext";

function ProtectedRoute({children}) {
    const {user, loading} = useAuth();

    if (loading) {
        return <p>Загрузка...</p>;
    }

    return user ? children : <Navigate to="/login"/>;
}

export default ProtectedRoute;
