import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.brand}>
        <div to="/">CareWallet</div>
      </div>
      <ul className={classes.nav}>
        <li className={classes.navItem}><NavLink style={{color: "black"}} to='/Home'>Home</NavLink></li>
        <li className={classes.navItem}><NavLink style={{color: "black"}} to='/Donate'>Donate</NavLink></li>
        <li className={classes.navItem}><NavLink style={{color: "black"}}>Contact</NavLink></li>
        <li className={classes.navItem}><NavLink style={{color: "black"}}>About us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
