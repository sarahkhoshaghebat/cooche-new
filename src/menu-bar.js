import react from 'react';
import './app.css';
import TextCenter from './TextCenter';
import Pc from './pc'


class MenuBar extends react.Component {
    render () {
        return (
			<react.Fragment>
        		<div className="container-fluid menu">
		   			 <div class="row mb-4">
						<div class="col-6 col-sm-6">
							<button type="button" class="login ml-md-4">ورود/ثبت نام</button>
							<button type="button" class="Download">دانلود</button>
						</div>
						<div className="col-6 col-sm-6">
							<a href="/">
								<img src="/logo.png" className="img-logo mr-md-5" />
							</a>
			   			 </div>
		    		</div>
	    		</div>
				<TextCenter/>
				<Pc/>
    		</react.Fragment>
		)
	}
}

export default MenuBar;