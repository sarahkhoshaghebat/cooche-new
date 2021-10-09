import React ,{ Component } from 'react';
import cardimg from './img/background-home.jpg';
import logo from './img/logo.png';
import './app.css';


class Register extends Component {
    render() {
        return(
           <div className="modal">
               <div className="modal-dialog">
                    <img src={logo} />
               </div>
           </div>
        );
    }
}


export default Register;