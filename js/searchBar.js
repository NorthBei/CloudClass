var SearchBar = React.createClass({
    render: function() {
        return(
            <div id="search_bar">
                <form action="">
                    <Select/>
                    <div id="search_input">
                        <input type="text" placeholder="想學什麼?" id="learn_what"/>
                        <div id="auto_complete_box">
                            <AutoCompleteRow/>
                            <AutoCompleteRow/>
                        </div>
                    </div>
                    <SearchButton/>
                </form>
            </div>
        );
    }
});

var Select = React.createClass({
    render: function() {
        return (
             <select name="x" id="select_category">
                <option value="1">全部</option>
                <option value="1">吉他</option>
            </select>
        );
    }
});

var AutoCompleteRow = React.createClass({
    render: function() {
        return (
            <div className="auto_complete_row">陽明山</div>
        );
    }
});

var SearchButton = React.createClass({
    render: function() {
        return (
            <button type="submit" id="go_search">
                <span>搜尋</span>
            </button>
        );
    }
});

ReactDOM.render(
    <SearchBar/>,
    document.getElementById('search_form')
);