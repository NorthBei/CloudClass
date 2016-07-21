var UserMenu = React.createClass({
    render: function() {
        return (
            <div>
                <span className="nav">登入</span>
                <span className="nav">註冊</span>
                <span className="nav">幫助</span>
                <span className="nav">
                    <span id="beTeacher">成為老師</span>
                </span>
            </div>
        );
    }
});

ReactDOM.render(
    <UserMenu/>,
    document.getElementById('nav_wrapper')
);