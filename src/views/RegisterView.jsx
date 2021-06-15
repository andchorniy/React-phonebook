import { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './Register.module.css'

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Registration</h2>
        <form  className={style.form} onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField className={style.input} type="name"
                name="name"
                size="small" 
                value={this.state.email}
                onChange={this.handleChange} id="name" label="Name" variant="filled" />
            <TextField className={style.input} type="email"
                name="email"
                size="small" 
                value={this.state.email}
                onChange={this.handleChange} id="email" label="Email" variant="filled" />
            <TextField className={style.input} id="password" type="password"
                name="password"
                size="small" 
                value={this.state.password}
                onChange={this.handleChange} label="Password" variant="filled" />
            <Button className={style.btn} type="submit" variant="contained" color="primary">
                Login
            </Button>
        
        </form>

      </div>
    );
  }
}
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
