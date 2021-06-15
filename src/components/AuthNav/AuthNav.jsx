import { NavLink } from "react-router-dom";
import style from '../AppBar/AppBar.module.css'

const AuthNav = () => (
  <div className={style.authNav}>
    <NavLink to="/login" className={style.navItem} activeClassName={style.activeItem}> Login</NavLink>
    <NavLink to="/register" className={style.navItem} activeClassName={style.activeItem}>Register</NavLink>
  </div>
);
export default AuthNav;
