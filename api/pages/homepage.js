// import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button'

// export default class HomePage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { apiResponse: "" };
//       }
    
//       callAPI() {
//         fetch("http://localhost:9000/testAPI")
//           .then(res => res.text())
//           .then(res => {
//             console.log(res);
//             this.setState({ apiResponse: res })
//           });
//       }
    
//       componentWillMount() {
//         this.callAPI();
//       }
    
//       render() {
//         return (
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <Button variant="info" href="/">
//                   New Challenge
//               </Button>
//             <p>
//             {this.state.apiResponse}
//             </p>
//               <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn React
//             </a>
//             </header>
//           </div>
//         );
//       }
// }