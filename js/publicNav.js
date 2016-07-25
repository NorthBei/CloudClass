var UserMenu = React.createClass({
    render: function() {
        return (
            <div>
                <button className="nav home_nav">登入</button>
                <button className="nav home_nav">註冊</button>
                <button className="nav home_nav">幫助</button>
                <button className="nav home_nav">
                    <span id="beTeacher">成為老師</span>
                </button>
            </div>
        );
    }
});

ReactDOM.render(
    <UserMenu/>,
    document.getElementById('nav_wrapper')
);