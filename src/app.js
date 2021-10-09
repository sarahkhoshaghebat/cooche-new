import React ,{ Component } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextCenter from './text-center';
import Pc from './pc'
import Neighbourhood from './neighbourhood-text';
import BackgroundGreen from './cooche-background-green';
import Privacy from './privacy ';
import Footer from './footer';
import logo from './img/logo.png';


class MenuBar extends Component {
    render () {
        return (
			<>
        		<div className="container-fluid menu">
		   			<div className="row mb-4">
						<div className="col-6 col-sm-6">
							<button type="button" data-bs-toggle="register" data-bs-target="#myRegister" className="login ml-md-4">ورود/ثبت نام</button>
							<button type="button" className="Download">دانلود</button>
						</div>
						<div className="col-6 col-sm-6">
							<a href="/">
								<img src={logo} className="img-logo mr-md-5" alt="coocheh"/>
							</a>
			   			</div>
		    		</div>
	    		</div>
				<TextCenter/>
				<Pc/>
				<Neighbourhood/>
				<BackgroundGreen/>
				<Privacy/>
				<Footer/>
    		</>
		)
	}
}

export default MenuBar;