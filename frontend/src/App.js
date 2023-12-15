
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login"
import {Routes,Route} from "react-router-dom"
import UserDash from "./pages/user/user"
import UserRoute from "./PrivateRoutes/userRoute"
import AdminRoute from "./PrivateRoutes/adminRoute"
import AdminDash from "./pages/admin/admin"
import Navigation from "./components/NavBar"
import MoviePlayer from "./pages/user/moviePlayer"

import Home from "./pages/user/Home"

function App() {

  
  return (
    <div className="wrapper">
<Navigation/>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
<Route path="/player/:id" element={<MoviePlayer/>}/>

  <Route path="/" element={<Home/>}/>
  

 
  <Route element={<UserRoute/>}>
    <Route path="/userDash" element={<UserDash/>}/>
  </Route>

  // route for connected admin
  <Route element={<AdminRoute/>}>
    <Route path="/adminDash" element={<AdminDash/>}/>

  </Route>
</Routes>





      
    </div>
  );
}
export default App;
