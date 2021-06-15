import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import AuthNav from '../AuthNav/'
import UserMenu from "../UserMenu";
import selectors from '../../redux/auth/auth-selectors'
import { ReactComponent as PhoneBookSvg } from '../../icons/phonebook.svg'
import style from './AppBar.module.css'


const AppBar = ({isLogin}) => {
  
  return (
  <header className={style.header}>
    <nav className={style.nav}>
      <NavLink to="/" exact className={style.navItem} activeClassName={style.activeItem}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={style.navItem} activeClassName={style.activeItem}> Contacts </NavLink>
      
    </nav>
    <Link to="/"> <PhoneBookSvg width="40" height="40" /> </Link>
    {isLogin ?  <UserMenu /> :<AuthNav /> }
  </header>
)};

const mapStateToProps = (state) => ({
  isLogin: selectors.getToken(state),
});
export default connect(mapStateToProps)(AppBar);
