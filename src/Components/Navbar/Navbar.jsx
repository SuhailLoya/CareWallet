import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import LogoImg from "../../assets/CareWalletLogo.png";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav}>
        <li className={classes.brandLogo}>
          <NavLink>
            <img src={LogoImg}></img>
          </NavLink>
        </li>
        <li className={classes.brand}>
          <NavLink style={{ color: "black" }} to="/">
            CareWallet
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink style={{ color: "black" }} to="/">
            Home
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink style={{ color: "black" }} to="/donate">
            Donate
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink style={{ color: "black" }} to="/create">
            Create
          </NavLink>
        </li>
      </ul>
      <ul className={classes.nav}>
        <li className={classes.navItem}>
          <NavLink style={{ color: "black", whiteSpace:"nowrap" }} to="/mynft">
            My NFTs
          </NavLink>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
