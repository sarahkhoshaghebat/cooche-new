import react from "react";
import './app.css';

class TextCenter extends react.Component {
    render() {
        return (
            <section className="background-img">
				<div className="container">
					<div className="row d-flex justify-content-md-center mt-5">
						<div className="col-sm">
							<h3 className="text-bold">این «کوچه» بن‌بست نیست</h3>
						</div>
					</div>
					<div className="row d-flex justify-content-md-center mt-1">
						<div className="col-sm">
							<h6 className="text" dir="rtl">«کوچه» شبکۀ اجتماعی محلی برای ارتباط بین افرادیه که در نزدیکی هم هستند</h6>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-sm d-flex justify-content-center">
							<button type="button" className="login-btn">ورود</button>
						</div>
					</div>
					<div className="container d-flex justify-content-center py-1">
						<div className="social row row-cols-3 row-cols-md-1 py-1 my-1">
							<a href="https://twitter.com/coocheh" className="col px-1 py-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51c5a8" strokewidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
							</a> 
							<a href="https://www.instagram.com/coocheh/" className="col px-1 py-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51c5a8" trokewidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
							</a>
							<a href="https://www.linkedin.com/company/coocheh/" className="col px-1 py-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51c5a8" trokewidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
							</a>
						</div>
					</div>
				</div>
			</section>
        );
    }
}

export default TextCenter;