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
    let name = this.state.formvalue.name;
    let email = this.state.formvalue.email;
    console.log(typeof name);
    console.log(email);
    const data1 = {
      "to": [
        {
          "name": "Akhil",
          "email": "singampalliakhil@gmail.com"
        }
      ],
      "from": {
        "name": "Exult",
        "email": "info@cosmetica.in"
      },
      "domain": "cosmetica.in",
      "mail_type_id": "1",
      "template_id": "Offers",
      "authkey": "312379AYnyiHzkHSVm6161ac34P1"
    }

    // axios.post('https://api.msg91.com/api/v5/email/send', data1)
    //   .then(response => {

    //     // console.log('here');
    //     console.log(response);
    //   }).catch(error => {
    //     console.log('here')
    //     console.log(error);
    //   })

    // let url = 'https://api.msg91.com/api/v5/email/send';
    axios({
      method: 'POST',
      url: 'https://api.msg91.com/api/v5/email/send',
      data: data1,
      config: { headers: ({ 'Content-Type': 'application/json' }) }
    })
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error.response)
      });
  }


  handleSubmit = event => {
    event.preventDefault();
    this.submitEmails();
    // console.log('here');
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
                  <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" ><b>Send</b></button>
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
