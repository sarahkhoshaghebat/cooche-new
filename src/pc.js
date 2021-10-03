import React from "react";
import './app.css';
import pc from "./img/pc.png";
import pishro from "./img/app-pishro.jpeg";
import sibche from "./img/sibche.jpeg";
import android from "./img/android.jpeg";
import google from "./img/google-play.jpeg";
import bazar from "./img/bazar.png";

class Pc extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="container">
					<div className="row">
						<div className="col">
							<img src={pc} className="background-pc" alt="Computer"/>
						</div>
					</div>
					<div className="row ">
						<div className="col-sm">
							<h3 className="text-bold" dir="rtl">«کوچه» رو به همه بازه!</h3>
						</div>
					</div>
					<div className="row ">
						<div className="col-sm">
							<h6 className="text">برای اینکه بتونین کامنت، لایک و یا پست بذارین، کافیه چند دقیقه وقت بذارین و کوچه رو نصب کنین</h6>	
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row no-gutters d-flex justify-content-center mt-4">
						<div className="col-md-auto d-flex justify-content-center">
							<div className="card">
								<img src={pishro} className="social-img" alt="social"/>
								<a href="/post" className="text">اپلیکیشن پیشرو</a>
							</div>
						</div>
						<div className="col-md-auto d-flex justify-content-center">
							<div className="card">
								<img src={sibche} className="social-img" alt="social"/>
								<a href="/#" className="text">سیبچه</a>
							</div>
						</div>
						<div className="col-md-auto d-flex justify-content-center">
							<div className="card">
								<img src={android} className="social-img" alt="social"/>
								<a href="/#" className="text">مستقیم اپلیکیشن اندروید</a>
							</div>
						</div>
						<div className="col-md-auto d-flex justify-content-center">
							<div className="card">
								<img src={google} className="social-img" alt="social"/>
								<a href="/#" className="text">گوگل پلی</a>
							</div>
						</div>
						<div className="col-md-auto d-flex justify-content-center">
							<div className="card">
								<img src={bazar}className="social-img" alt="social"/>
								<a href="/#" className="text">کافه بازار</a>
							</div>
						</div>
					</div>
			</div>
            </React.Fragment>
        );
    }
}

export default Pc;