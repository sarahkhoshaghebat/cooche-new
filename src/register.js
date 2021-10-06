import React ,{ Component } from 'react';
import cardimg from './img/background-home.jpg';
import logo from './img/logo.png';
import './app.css';


class Register extends Component {
    render() {
        return(
            <div className="card">
                <img src={cardimg} className="img-card-left" alt="homeimg"/>
                <div className="card-body">
                    <img src={logo} className="card-title"/>
                    <input type="text"></input>
                    <input type="password"></input>
                    <a>
                        <link to="/forget password">forget password</link>
                    </a>
                    <button>ورود</button>
                    <button>قبلا ثبت نام نکرده ام</button>
                </div>
            </div>
        );
    }
}


export default Register;