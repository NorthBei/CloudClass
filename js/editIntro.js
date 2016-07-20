var Body = React.createClass({
    render: function() {
        return(
            <div>
                <Header/>
                <OrangeLine/>
                <Content/>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function() {
        return (
        <header className="page_section" id="header">
            <img src={"pic/Logo-02.png"} alt="LOGO" id="logo"/>
            <span id="page_tag">個人資料</span>
            <div id="nav_wrapper">
                <span className="nav">儲存</span>
                <span className="nav">取消</span>
            </div>
        </header>
        );
    }
});

var OrangeLine = React.createClass({
    render: function() {
        return (
        <section className="page_section" id="orange_section"></section>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
        <section className="page_section" id="content_section">
            <UploadPhoto/>
            <InputName/>
            <InputAboutMe/>
            <BindInfo/>
        </section>
        );
    }
});

var UploadPhoto = React.createClass({
    render: function() {
        return (
        <div className="one_part">
            <h1 className="part_title">個人資料相片</h1>
            <section className="part_content">
                <div className="upload_img">
                    <img className="upload_img_icon" src={"pic/pic_icon.png"} alt="圖片圖示"/>
                </div>
                <div className="choice_button_wrapper">
                    <input className="true_choice_button" name="File" type="file" size="20" />
                    <div className="fake_choice_button">選擇</div>
                </div>
                
            </section>
        </div>
        );
    }
});

var InputName = React.createClass({
    render: function() {
        return (
        <div className="one_part">
            <h1 className="part_title">姓名</h1>
            <section className="part_content">
                <input id="class_name" type="text"/>
            </section>
        </div>
        );
    }
});

var InputAboutMe = React.createClass({
    render: function() {
        return (
        <div className="one_part">
            <h1 className="part_title">關於我</h1>
            <section className="part_content">
                <textarea id="about_class">
                </textarea>
            </section>
        </div>
        );
    }
});

var BindInfo = React.createClass({
    render: function() {
        return (
        <div className="one_part">
            <h1 className="part_title">綁定資訊</h1>
            <section className="part_content" id="bind_info">

                <div className="info_wrapper">
                    帳號：
                    <span id="account">funhouse.rb@gmail.com</span>
                    <img id="OK_icon" src={"pic/OK_icon.png"} alt="OK"/>
                </div>
                <div className="info_wrapper">
                    密碼：
                    <span className="info_feature_button">更改密碼</span>
                </div>
                <div className="info_wrapper">
                    Facebook：
                    <span className="info_feature_button">斷開連結</span>
                </div>
            </section>
        </div>
        );
    }
});

window.addEventListener("load",function name(params) {
    ReactDOM.render(
        <Body/>,
        document.getElementById('body')
    );
})