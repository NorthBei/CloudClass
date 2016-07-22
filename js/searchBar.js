var autoCompleteResult = [
    {id:1,result:"黃石國家公園"},
    {id:2,result:"陽明山"},
    {id:3,result:"墾丁國家公園"},
    {id:4,result:"太平島"}
];

var SearchBar = React.createClass({
    render: function() {

        var autoCompleteResutArray = this.props.autoCompleteResult.map(function(autoComplete) {
            return (
            <AutoCompleteRow key={autoComplete.id} result={autoComplete.result}/>
            );
        });

        return(
            <div id="search_bar">
                <form action="">
                    <Select/>
                    <div id="search_input">
                        <input type="text" placeholder="想學什麼?" id="learn_what"/>
                        <div id="auto_complete_box">
                            {autoCompleteResutArray}
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
            <div className="auto_complete_row">{this.props.result}</div>
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
    <SearchBar autoCompleteResult={autoCompleteResult}/>,
    document.getElementById('search_form')
);