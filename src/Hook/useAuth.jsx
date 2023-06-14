
import { useContext } from "react";
import { Authcontext } from "../Providers/Authcontexts";



const useAuth = () => {
    const auth = useContext(Authcontext);
    return auth;
}

export default useAuth;