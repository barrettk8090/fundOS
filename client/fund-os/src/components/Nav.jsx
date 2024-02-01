import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {Link} from "react-router-dom";

function Nav({user, setUser}) {

    function handleLogout() {
        fetch('/api/logout', {
          method: "DELETE"
        })
          .then(r => setUser(null));
      }
    return (
    <>
       {user ? (
            <nav>
            <ul>
                <li>WalletConnect</li>
            </ul>
            <ul>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/account"><li>Account</li></Link>
                <Link to="/project/1"><li>ProjectListingTemp</li></Link>
                <Link to="/create-new-project"><li>Create Project Form</li></Link>
                <button onClick={handleLogout}>Logout</button>
            </ul>
        </nav>
       ): <nav>
       <ul>
           <Link to="/create-account"><li>Create An Account</li></Link>
           <Link to="login"><li>Login</li></Link>
       </ul>
   </nav>} 
        </>
    );
}

export default Nav