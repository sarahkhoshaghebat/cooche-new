import react from "react";
import Styles from './style.module.css';

class BackgroundGreen extends react.Component {
    render() {
        return (
            <div className={Styles.background-img-green}>
			    <span className={Styles.text-green}>کوچه‌ها رو با هم بگردیم</span>
		    </div>
        );
    }
}

export default BackgroundGreen;