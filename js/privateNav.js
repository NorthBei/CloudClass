var src = {path:"http://ventureburn.com/wp-content/themes/HotTopix_Ventureburn/custom_share/img/twitter.png"};

var UserMenu = React.createClass({
    render: function() {
        return (
            <div>
                <span className="nav home_nav">Po-Wei
                    <img id="face-pic" src={this.props.src.path} alt="大頭貼"/>
                    <OptionBox/>
                </span>
                <span className="nav home_nav">幫助</span>
                <span className="nav home_nav">訊息</span>
                <span className="nav home_nav">聽課</span>
                <span className="nav home_nav">開課</span>
            </div>
        );
    }
});

var OptionBox = React.createClass({
    render: function() {
        return (
            <div id="personal_option_box">
                <div id="personal_option_triangle"></div>
                <div id="personal_option_wrapper">
                    <div className="personal_option">編輯個人資料</div>
                    <hr className="personal_option_splite_line"/>
                    <div className="personal_option">回報問題</div>
                    <hr className="personal_option_splite_line"/>
                    <div className="personal_option">登出</div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <UserMenu src={src} />,
    document.getElementById('nav_wrapper')
);