import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import AuthService from "./services/auth.service"
import PrivateRoute from "./services/private-route"
import AddComp from "./components/add-comp.component"
import CompsList from "./components/comps-list.component"
import Comp from "./components/comp.component"
import HomeComponent from "./components/home.component"
import LoginComponent from "./components/login.component";
import SignupComponent from "./components/signup.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
          showComputers: false,
          currentUser: undefined,
        };
    }

    async componentDidMount() {
        const user = await AuthService.getCurrentUser();

        if (user) {
          this.setState({
            currentUser: user,
            showComputers: user.factory_type !== null,
          });
        }
    }

    async handleLogout() {
        try {
            await AuthService.logout();
        }
        catch (e) {
            console.log(e);
        }
    };

    render() {
        const { currentUser, showComputers } = this.state;

        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand nav-link">
                        Главное окно
                    </Link>

                    <div className="navbar-nav mr-auto">
                        {showComputers && (
                          <li className="nav-item">
                            <Link to={"/comps"} className="nav-link">
                              Настройки
                            </Link>
                          </li>
                        )}
                      </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                          <li className="nav-item">
                            <div className="nav-link">Пользователь: {currentUser.username}</div>
                          </li>
                          <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={this.handleLogout}>
                              Выйти
                            </a>
                          </li>
                        </div>
                      ) : (
                        <div className="navbar-nav ml-auto">
                          <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                              Вход
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link to={"/signup"} className="nav-link">
                              Регистратсия
                            </Link>
                          </li>
                        </div>
                    )}
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path="/" component={HomeComponent} />
                        <Route exact path={"/login"} component={LoginComponent}/>
                        <Route exact path={"/signup"} component={SignupComponent}/>
                        <PrivateRoute exact path="/comps" component={CompsList} />
                        <PrivateRoute exact path="/add" component={AddComp} />
                        <PrivateRoute exact path="/comps/:id" component={Comp} />
                        <Route render={() => <Redirect to="/"/>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
