import AddUser from "../AddUser/AddUser";
import Home from "../Home/Home";
import CasualLeave from "../Home/Services/GPS/CasualLeave";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import Services from "../Pages/Service/Services";
import UpdateUser from "../UpdateUser/UpdateUser";

export const publicRoute = [
    {path: '/', name: Home, Component: Home},
    {path: '/services', name: Services, Component: Services},
    {path: '/about', name: About, Component: About},
    {path: '/contact', name: Contact, Component: Contact},
    {path: '/register', name: Register, Component: Register},
    {path: '/blog', name:Blog, Component: Blog},
    {path: '/adduser', name: AddUser, Component: AddUser},
    {path: '/updateuser', name: UpdateUser, Component: UpdateUser},
    {path: '/casualleave', name: CasualLeave, Component: CasualLeave}
]