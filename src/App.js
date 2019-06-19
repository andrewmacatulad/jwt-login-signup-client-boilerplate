import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import Cookies from "js-cookie";

import "./App.css";
// import HomePage from "./component/HomePage";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
// import SignIn from "./signin/SignInPage";
// import TestModalPage from "./component/TestModalPage";
import PrivateRoute from "./component/common/PrivateRoute";

import { getUser } from "./component/signin/signInAction";
import LoadingComponent from "./app/layout/LoadingComponent";

const AsyncHomePage = Loadable({
  loader: () => import("./component/HomePage"),
  loading: LoadingComponent
});

const AsyncLoginPage = Loadable({
  loader: () => import("./component/signin/SignInPage"),
  loading: LoadingComponent
});

const AsyncTestPage = Loadable({
  loader: () => import("./component/TestModalPage"),
  loading: LoadingComponent
});

const AsyncProtectedPage = Loadable({
  loader: () => import("./component/ProtectedAuth/ProtectedPage"),
  loading: LoadingComponent
});

const AsyncNotFoundPage = Loadable({
  loader: () => import("./component/common/NotFoundPage"),
  loading: LoadingComponent
});

// if (Cookies.get("test") !== undefined) {
//   store.dispatch(getUser(Cookies.get("test")));
//   console.log("Test");
// }

class App extends Component {
  componentDidMount() {
    if (Cookies.get("test") !== undefined) {
      // console.log("Test");
      this.props.getUser(Cookies.get("test"));
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.user.isAuthenticated) {
  //     this.props.history.push("/test");
  //   }
  //   // if (nextProps.errors) {
  //   //   this.setState({ errors: nextProps.errors });
  //   // }
  // }
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
          <PrivateRoute path="/signin" component={AsyncLoginPage} />
          {/* <PrivateRoute path="/signin">
            <SignIn />
          </PrivateRoute> */}
          <Route path="/protected" component={AsyncProtectedPage} />
          <Route path="/test" component={AsyncTestPage} />
          <Route component={AsyncNotFoundPage} />
        </Switch>
        <Footer />
        {/* <PrivateRoute path="/dashboard" component={TestModalPage} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(withRouter(App));
// export default App;
