import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
import { emails } from './Components/models/email';
import "./index.css";
// import "./custom.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Emails from "./Components/Emails";
import Home from './Components/Home';
import BulkEmails from './Components/BulkEmails';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formvalue: {
        name: "",
        emailId: "",
        contactNumber: ""

      }
    }
  }
  submitEmails = () => {
    const { formvalue } = this.state.formvalue
    const data = {
      to: [
        {
          name: this.state.formvalue.name,
          email: this.state.formvalue.email
        }
      ],
      from: {
        name: "Exult",
        email: "info@cosmetica.in"
      },
      domain: "cosmetica.in",
      mail_type_id: "1",
      template_id: "Offers",
      authkey: ""
    }

    axios.post('https://api.msg91.com/api/v5/email/send', data).then(response => {
      this.setState({ userData: response.data })
    }).catch(error => {
      if (error.response) {
        this.setState();
      } else {
        this.setState();
      }
    })
  }




  handleSubmit = event => {
    event.preventDefault();
    this.submitEmails();
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const { formvalue } = this.state;
    this.setState({ formvalue: { ...formvalue, [name]: value } });
    console.log(formvalue);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <br />
          <br />
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h1>Send Emails</h1>
              </div>
              <div className="card-body">
                <form className="Emails" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="bold d-flex justify-content"><b>Name</b></label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      id="name"
                      value={this.state.formvalue.name}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="emailId" className="bold d-flex justify-content"><b>Email</b></label>

                    <input
                      type="email"
                      placeholder="Enter EmailId"
                      name="email"
                      id="email"
                      value={this.state.formvalue.email}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary" ><b>Send</b></button>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}
export default App;
