import React, {Component} from "react";

import { Link, navigate } from '@reach/router';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e){
        const itemName = e.target.name;
        const itemValue = e.target.value;
        this.setState({ [itemName]: itemValue });
    }

    handleSearch(e){
        alert('Handle Search is called');
        e.preventDefault();
        navigate('/questions');
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">StackClone</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/questions">Questions</Link>
                </li>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSearch}>
                <input
                 className="form-control mr-sm-2"
                 type="search" 
                 placeholder="Search" 
                 aria-label="Search"
                 value={this.state.email}
                 onChange={this.handleChange}
                  />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Navigation;