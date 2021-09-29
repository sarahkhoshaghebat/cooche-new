import react from 'react';
import './app.css';
import location from './img/location .png';
import location_small from './img/location_small.png';
import home from './img/home.png';
import home_small from './img/home_small.png';
import neighbourhood_img from './img/neighbourhood_img.png';
import neighbourhood_small from './img/neighbourhood_small.png';


class Neighbourhood extends react.Component{
    render() {
        return (
            <div class="container center-mt">
			<div class="row align-items-center mt-3 d-flex flex-row-reverse">
				<div class="col-md-6 d-flex justify-content-center">
					<img src={location} class="img-big ml-md-5"/>
				</div>
				<div class="col-md-6">
					<div class="row row-cols-1">
						<div class="col d-flex justify-content-center justify-content-md-end">
							<img src={location_small} class="img-little mb-3"/>
						</div>
						<div class="col d-flex justify-content-center justify-content-md-end">
							<h3 class="text-right text-bold">هر جایی یه داستانی داره</h3>
						</div>
						<div class="col ">
							<p class="text text-right mt-2">می‌تونین در هر نقطه‌ای، پستی رو با دیگران به اشتراک بذارید. توی «کوچه» مکان‌ها نقاط اشتراک ما هستند. هر مکانی می‌تونه نقطه‌ای بشه برای ارتباط</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row align-items-center mt-5">
				<div class="col-md-6 d-flex justify-content-center">
					<img src={home} class="img-left mr-md-5"/>
				</div>
				<div class="col-md-6">
					<div class="row row-cols-1">
						<div class="col d-flex justify-content-center justify-content-md-end">
							<img src={home_small} class="img-little mb-3"/>
						</div>
						<div class="col d-flex justify-content-center justify-content-md-end">
							<h3 class="text-right text-bold">هر محله پر از سورپرایزه</h3>
						</div>
						<div class="col d-flex justify-content-center justify-content-md-end">
							<p class="text text-right mb-2">محله‌ها پر از اخبار، اتفاقات، خاطرات، رویدادها و خدماتی هستند که باید به کمک شما به اشتراک گذاشته و دیده بشن</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row align-items-center mt-5 d-flex flex-row-reverse">
				<div class="col-md-6 d-flex justify-content-center justify-content-md-end">
					<img src={neighbourhood_img} class="img-big ml-md-5"/>
				</div>
				<div class="col-md-6">
					<div class="row row-cols-1">
						<div class="col d-flex justify-content-center justify-content-md-end">
							<img src={neighbourhood_small} class="img-little mb-3 mt-3"/>
						</div>
						<div class="col d-flex justify-content-center justify-content-md-end">
							<h3 class="text-right text-bold">از محله‌ فراتر برو</h3>
						</div>
						<div class="col d-flex justify-content-center justify-content-md-end">
							<p class="text-right text mt-2">شهر با کوچه‌ها زنده‌ست. با «کوچه» می‌شه از محله‌ها فراتر رفت و شهر رو با داستان‌ها و اونچه در اون می‌گذره دید</p>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}


export default Neighbourhood;