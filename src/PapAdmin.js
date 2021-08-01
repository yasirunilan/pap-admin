import './App.css';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {BrowserRouter as Router} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {CookiesProvider} from 'react-cookie';
import NotFoundScreen from "./pages/NotFoundScreen";
import {Switch} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import RouteComponent from "./pages/RouteComponent";
import { store } from './redux/store'
import { Provider } from 'react-redux'

function PapAdmin() {
    return (
        <Provider store={store}>
            <CookiesProvider>
                <Router>
                    <div style={{
                        minHeight: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Switch>
                            <RouteComponent exact path="/home">
                                <HomeScreen/>
                            </RouteComponent>
                            <RouteComponent exact path="/login">
                                <SignIn/>
                            </RouteComponent>
                            <RouteComponent exact path="/register">
                                <SignUp/>
                            </RouteComponent>

                            <RouteComponent exact path="/">
                                <HomeScreen/>
                            </RouteComponent>
                            <RouteComponent path="*">
                                <NotFoundScreen/>
                            </RouteComponent>
                        </Switch>
                    </div>
                </Router>
            </CookiesProvider>
        </Provider>
    );
}

export default PapAdmin;
