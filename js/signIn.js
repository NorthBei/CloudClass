var SignInBox = React.createClass({
    render: function() {
        return (
        <div id="sign_in_box">
            <img id="close_box" src={"pic/X.png"} alt="關閉"/>
            <h1 id="sign_in_title">註冊新會員</h1>
            <h6 id="private_policy">隱私政策</h6>
            <Email/>
            <Password/>
            <Buttons/>
        </div>
        );
    }
});

var Email = React.createClass({
    render: function() {
        return (
            <div className="input_component">
                <label for="" className="input_intro">Email</label>
                <div className="input_wrapper">
                    <input type="email" className="input_area"/>
                </div>
            </div>
        );
    }
});

var Password = React.createClass({
    render: function() {
        return (
            <div className="input_component">
                <label for="" className="input_intro">密碼</label>
                <div className="input_wrapper">
                    <input type="password" className="input_area"/>
                    <img id="eye_slash" src={"pic/eye-slash.png"} alt="切換密碼顯示"/>
                </div>
            </div>
        );
    }
});

var Buttons = React.createClass({
    render: function() {
        return (
            <div id="buttons">
                <div id="register_wrapper">
                    <button id="register">註冊</button>
                </div>
                <div id="or">或</div>
                <button id="facebook_sign_in">使用Facebook進入</button>
            </div>
        );
    }
});

window.addEventListener("load",function name(params) {
    ReactDOM.render(
        <SignInBox/>,
        document.getElementById('sign_in_section')
    );
})
