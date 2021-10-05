import react from "react";
import "./app.css";
import footer_img from "./img/footer-img.png"


class Footer extends react.Component{
    render(){
        return(
            <div className="container-fluid footer">
			<div className="row">
				<div className="col-sm">
					<img src={footer_img} alt="img-black"/>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-sm">
					<h3 className="text-footer">شبکۀ اجتماعی محلی برای آنچه که در اطراف شما است</h3>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm">
					<span className="link">info@coocheh.com</span>
					<span className="circle">●</span>
					<a href="https://coocheh.com/blog/" className="footer-link">بلاگ کوچه</a>
					<span className="circle">●</span>
					<a href="https://coocheh.com/landings/terms/" className="footer-link">قوانین و حریم خصوصی</a>
				</div>
			</div>
		</div>
        );
    }
}


export default Footer;