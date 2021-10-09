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
import Register from './register'
import reactDom from 'react-dom';


class MenuBar extends Component {
    render () {
        return (
			<div>
        		<div className="container-fluid menu">
		   			<div className="row mb-4">
						<div className="col-6 col-sm-6">
							<button type="button" className="login ml-md-4">ورود/ثبت نام</button>
							<button type="button" className="Download">دانلود</button>
						</div>
						<div className="col-6 col-sm-6">
							<a href="/">
								<img src={logo} className="img-logo mr-md-5" alt="coocheh"/>
							</a>
			   			</div>
		    		</div>
	    		</div>


				<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Launch demo modal
				</button>


				<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						...
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
					</div>
				</div>
				</div>
				<TextCenter/>
				<Pc/>
				<Neighbourhood/>
				<BackgroundGreen/>
				<Privacy/>
				<Footer/>
    		</div>
		)
	}
}

export default MenuBar;