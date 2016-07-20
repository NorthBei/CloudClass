var DetailContent = React.createClass({
    render: function() {
        return (
            <div>
                <SelectGroup/>
                <DetailTable/>
                <NextButtonGroup/>
            </div>
        );
    }
});

var SelectGroup = React.createClass({
    render: function() {
        return (
        <div id="select_group">
            <select name="" className="select_button" id="way">
                <option value="">所有收款方式</option>
                <option value="">所有收款方式</option>
                <option value="">所有收款方式</option>
            </select>
            
            <select name="" className="select_button" id="house">
                <option value="">所有房源</option>
                <option value="">所有房源</option>
                <option value="">所有房源</option>
            </select>

            <select name="" className="select_button" id="blank">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            
            <select name="" className="select_button month">
                <option value="">From : 一月</option>
                <option value="">From : 二月</option>
                <option value="">From : 三月</option>
            </select>

            <select name="" className="select_button month">
                <option value="">TO : 十二月</option>
                <option value="">TO : 十二月</option>
                <option value="">TO : 十二月</option>
            </select>
            
        </div>
        );
    }
});

var DetailTable = React.createClass({
    render: function() {
        return (
            <table id="transaction_details_table">
                <tr>
                    <th className="th">日期</th>
                    <th className="th">類型</th>
                    <th className="th">詳情</th>
                    <th className="th">金額</th>
                    <th className="th">已付</th>
                </tr>
                <DetailTableRow/>
                <DetailTableRow/>
                <DetailTableRow/>
                <DetailTableRow/>
                <DetailTableRow/>
                <DetailTableRow/>
            </table>
        );
    }
});

var DetailTableRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td className="td"> 2016年7月17日</td>
                <td className="td">搶劫</td>
                <td className="td">一銀盜領案 警方：13名嫌犯已出境</td>
                <td className="td">80000000</td>
                <td className="td">80000000</td>
            </tr>
        );
    }
});

var NextButtonGroup = React.createClass({
    render: function() {
        return (
            <div id="next_button_group">
                <div className="next_button">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <div className="next_button">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
});


window.addEventListener("load",function name(params) {
    ReactDOM.render(
        <DetailContent/>,
        document.getElementById('transaction_details_content')
    );
})
