import {Navigate, useLocation,Outlet} from "react-router-dom";
import {isAuthenticated} from "../helpers/auth"


// bech nasna3 des routes privées lel user yabda 3endou token 

const AdminRoute =()=>{
    const location = useLocation();
    return(
        isAuthenticated() && isAuthenticated().role ==="admin" ?(
            <Outlet/>  // ken true el condition tnajem tet3ada lel les routes li mawjoudin ta7t UserRoute
        ):(<Navigate to="/login" state={{from : location}} replace/>)
    )
}

export default AdminRoute