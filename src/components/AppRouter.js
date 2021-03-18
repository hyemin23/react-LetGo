
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import JoinForm from "routes/JoinForm";
import Profile from "routes/Profile";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {

    return (
        <Router>
            <Switch>
                {isLoggedIn ?
                    <>
                        <Route exact path="/" render={() => <Home userObj={userObj} />} />
                        <Route exact path="/profile" render={() => <Profile userObj={userObj} refreshUser={refreshUser} />} />
                    </>
                    :
                    <>
                        <Route exact path="/" component={Auth} />
                        <Route exact path="/joinForm" component={JoinForm} />
                    </>
                }
            </Switch>
        </Router>
    );
};


export default AppRouter;