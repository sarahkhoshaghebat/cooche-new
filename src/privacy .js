import react from "react";
import './app.css';


class Privacy extends react.Component {
    render () {
        return(
            <div className="container-fluid Privacy">
                <div className="row row-cols-1 px-5">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md">
                                <h3 className="text-privacy-bold">فضایی امن و مطمئن برای همه</h3>		
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <span className="text-privacy" dir="rtl">«کوچه» تلاش می‌کنه به محتوایی که در اون منتشر می‌شه نظارت داشته باشه تا همیشه در «کوچه» احساس امنیت کنید</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md">
                                <h3 className="text-privacy-bold">به حریم خصوصی احترام می‌گذاریم</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">		
                                <span className="text-privacy">اطلاعات افراد پیش ما محفوظه و برای مقاصد تجاری و غیرتجاری در اختیار دیگران قرار نخواهد گرفت</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 px-5">
                    <div className="col-md">
                        <div className="row">
                            <div className="col-md">
                                <h3 className="text-privacy-bold">رایگان، برای همه و همیشه</h3>
                            </div>	
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <span className="text-privacy">خدمات «کوچه» برای کاربران عادی همیشه رایگان خواهد موند</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Privacy;