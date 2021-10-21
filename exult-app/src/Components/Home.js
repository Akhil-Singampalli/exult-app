import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Emails from "./Emails";
import BulkEmails from "./BulkEmails";
// import "../custom.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                            <div className="navbar-header">
                                <Link className="nav-brand" to="/">
                                    Home
                                </Link>
                            </div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/emails">
                                        Send Emails
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bulkEmails">
                                        Send Bulk Emails
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/emails" component={Emails}></Route>
                            <Route path="/bulkEmails" component={BulkEmails}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Home;