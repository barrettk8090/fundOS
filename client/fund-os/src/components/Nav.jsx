import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>WalletConnect</li>
            </ul>

            <ul>
                <Link to="/create_account"><li>Create An Account</li></Link>
                <Link to="login"><li>Login</li></Link>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/account"><li>Account</li></Link>
                <li>Create Project Form</li>
                <li>Logout</li>
            </ul>
        </nav>
    );
}

export default Nav