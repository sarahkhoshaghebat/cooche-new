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
			<div>
        		<div className="container-fluid menu">
		   			<div className="row mb-4">
						<div className="col-6 col-sm-6">
							<button type="button" className="login ml-md-4" data-bs-toggle="modal" data-bs-target="#myModal">ورود/ثبت نام</button>
							<button type="button" className="Download">دانلود</button>
						</div>
						<div className="col-6 col-sm-6">
							<a href="/">
								<img src={logo} className="img-logo mr-md-5" alt="coocheh"/>
							</a>
			   			</div>
		    		</div>
	    		</div>

				<div className="modal" id="myModal">
					<div className="modal-dialog modal-xl">
						<div className="modal-content modal-size">
						<div className="container-fluid">
							<div className="row">
								<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
								<div className="col-7 col-sm-7 img-left">
								</div>
								<div className="col  column-right mt-5" dir="rtl">
									<div className="row mt-3">
										<img className="logo" src={logo}/>
									</div>
									<div className="row mt-3">
										<h4 className="text-title-modal">خوش آمدید</h4>
									</div>
									<div className="row mt-2 ">
										<p className="text-modal">«کوچه» شبکۀ اجتماعی محلی برای ارتباط بین افرادیه که در نزدیکی هم هستند</p>
									</div>
									<div className="row mt-4">
										<input className="inp-modal" type="text" name="text" placeholder="شماره موبایل یا نام کاربری" />
									</div>
									<div className="row mt-2">
										<input className="inp-modal" type="password" name="text" placeholder="کلمه عبور" />
									</div>
									<div className="row mt-3">
										<a className="forget-password" href="#">رمز عبور را فراموش کرده ام</a>
									</div>
									<div className="row mt-4">
										<button className="btn-modal-login" type="button">ورود</button>
									</div>
									<div className="row mt-2">
										<button className="btn-modal" type="button">قبلا ثبت نام نکرده ام</button>
									</div>
								</div>
							</div>
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