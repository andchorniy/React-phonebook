import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import selectors from '../../redux/auth/auth-selectors'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import style from './UserMenu.module.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const UserMenu = ({ email, onLogout }) => {
  const classes = useStyles();
  return (
    <div className={style.userMenu}>
      <p className={style.userEmail}> {email}</p>
      <Button
      type="button" onClick={onLogout}
        variant="contained"
        color="secondary"
        className={`${classes.button} ${style.btn}`}
      >
        Logout
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  email: selectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
