import { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";

import AppBar from "./components/AppBar";
import Container from "./components/Container";
import authOperations from "./redux/auth/auth-operations";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import LinearProgress from "@material-ui/core/LinearProgress";

const HomeView = lazy(() => import("./views/HomeView.jsx"));
const RegisterView = lazy(() => import("./views/RegisterView.jsx"));
const LoginView = lazy(() => import("./views/LoginView.jsx"));
const ContactsView = lazy(() => import("./views/ContactsView.jsx"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
            <PublicRoute
              path="/login"
              redirectTo="/contacts"
              restricted
              component={LoginView}
            />
            <PublicRoute
              path="/register"
              redirectTo="/contacts"
              restricted
              component={RegisterView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
