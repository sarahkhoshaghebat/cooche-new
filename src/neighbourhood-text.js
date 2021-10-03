import react from 'react';
import styles from './style.module.css';
import location from './img/location .png';
import location_small from './img/location_small.png';
import home from './img/home.png';
import home_small from './img/home_small.png';
import neighbourhood_img from './img/neighbourhood_img.png';
import neighbourhood_small from './img/neighbourhood_small.png';


class Neighbourhood extends react.Component{
    render() {
        return (
            <div className="container center-mt">
			<div className="row align-items-center mt-3 d-flex flex-row-reverse">
				<div className="col-md-6 d-flex justify-content-center">
					<img src={location} className="img-big ml-md-5"/>
				</div>
				<div className="col-md-6">
					<div className="row row-cols-1">
						<div className="col d-flex justify-content-center justify-content-md-end">
							<img src={location_small} className="img-little mb-3"/>
						</div>
						<div className="col d-flex justify-content-center justify-content-md-end">
							<h3 className="text-right text-bold">هر جایی یه داستانی داره</h3>
						</div>
						<div className="col ">
							<p className="text text-right mt-2">می‌تونین در هر نقطه‌ای، پستی رو با دیگران به اشتراک بذارید. توی «کوچه» مکان‌ها نقاط اشتراک ما هستند. هر مکانی می‌تونه نقطه‌ای بشه برای ارتباط</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row align-items-center mt-5">
				<div className="col-md-6 d-flex justify-content-center">
					<img src={home} className="img-left mr-md-5"/>
				</div>
				<div className="col-md-6">
					<div className="row row-cols-1">
						<div className="col d-flex justify-content-center justify-content-md-end">
							<img src={home_small} className="img-little mb-3"/>
						</div>
						<div className="col d-flex justify-content-center justify-content-md-end">
							<h3 className="text-right text-bold">هر محله پر از سورپرایزه</h3>
						</div>
						<div className="col d-flex justify-content-center justify-content-md-end">
							<p className="text text-right mb-2">محله‌ها پر از اخبار، اتفاقات، خاطرات، رویدادها و خدماتی هستند که باید به کمک شما به اشتراک گذاشته و دیده بشن</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row align-items-center mt-5 d-flex flex-row-reverse">
				<div className="col-md-6 d-flex justify-content-center justify-content-md-end">
					<img src={neighbourhood_img} className="img-big ml-md-5"/>
				</div>
				<div className="col-md-6">
					<div className="row row-cols-1">
						<div className="col d-flex justify-content-center justify-content-md-end">
							<img src={neighbourhood_small} className="img-little mb-3 mt-3"/>
						</div>
						<div className="col d-flex justify-content-center justify-content-md-end">
							<h3 className="text-right text-bold">از محله‌ فراتر برو</h3>
						</div>
						<div className="col d-flex justify-content-center justify-content-md-end">
							<p className="text-right text mt-2">شهر با کوچه‌ها زنده‌ست. با «کوچه» می‌شه از محله‌ها فراتر رفت و شهر رو با داستان‌ها و اونچه در اون می‌گذره دید</p>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}


export default Neighbourhood;