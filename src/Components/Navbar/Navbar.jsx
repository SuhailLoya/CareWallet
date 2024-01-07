import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import LogoImg from '../../assets/CareWalletLogo.png'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav}>
        <li className={classes.brandLogo}><NavLink><img src={LogoImg}></img></NavLink></li>
        <li className={classes.brand}><NavLink style={{color: "black"}} to='/Home'>CareWallet</NavLink></li>
        <li className={classes.navItem}><NavLink style={{color: "black"}} to='/Home'>Home</NavLink></li>
        <li className={classes.navItem}><NavLink style={{color: "black"}} to='/Donate'>Donate</NavLink></li>
      </ul>
      <ul className={classes.nav}>
        <li className={classes.navItem}><NavLink style={{color: "black"}} to='/mynft'>My NFTs</NavLink></li>
        <li className={classes.navItem}><NavLink style={{color: "black"}} to='/mynft'>My Donations</NavLink></li>
      </ul>
      <button className={classes.login}>Login</button>
    </nav>
  );
};

export default Navbar;
