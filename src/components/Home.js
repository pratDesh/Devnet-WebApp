import React, {Component} from "react";
import { Router, navigate } from '@reach/router';
import Login from './Login'
import Questions from "./Questions";

class Home extends Component {
    render() {
        return(
            <div>
        <Router>
          <Login path="/login" />
          <Questions path="/questions" />
        </Router>
            </div>
        );
    }
}

export default Home;