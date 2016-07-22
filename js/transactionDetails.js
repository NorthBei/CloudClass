var tableRow = [
    {id:1,time:"2016年7月17日",type:"搶劫",detail:"一銀盜領案 警方：13名嫌犯已出境",money:8000000,paid:5000},
    {id:2,time:"2016年7月22日",type:"火燒車",detail:"來台家屬昨晚在住都飯店說明會時，強烈要求台灣官方提供遊覽車起火，及過往車輛的行車紀錄器影片，希望能還原真相。但會後家屬們氣憤表示「要什麼沒有什麼」，會議過程氣氛很僵。",money:10000,paid:400},
    {id:3,time:"2016年7月17日",type:"搶劫",detail:"一銀盜領案 警方：13名嫌犯已出境",money:8000000,paid:5000},
    {id:4,time:"2016年7月22日",type:"火燒車",detail:"來台家屬昨晚在住都飯店說明會時，強烈要求台灣官方提供遊覽車起火，及過往車輛的行車紀錄器影片，希望能還原真相。但會後家屬們氣憤表示「要什麼沒有什麼」，會議過程氣氛很僵。",money:10000,paid:400},
    {id:5,time:"2016年7月17日",type:"搶劫",detail:"一銀盜領案 警方：13名嫌犯已出境",money:8000000,paid:5000},
    {id:6,time:"2016年7月22日",type:"火燒車",detail:"來台家屬昨晚在住都飯店說明會時，強烈要求台灣官方提供遊覽車起火，及過往車輛的行車紀錄器影片，希望能還原真相。但會後家屬們氣憤表示「要什麼沒有什麼」，會議過程氣氛很僵。",money:10000,paid:400},
    {id:7,time:"2016年7月17日",type:"搶劫",detail:"一銀盜領案 警方：13名嫌犯已出境",money:8000000,paid:5000},
    {id:8,time:"2016年7月22日",type:"火燒車",detail:"來台家屬昨晚在住都飯店說明會時，強烈要求台灣官方提供遊覽車起火，及過往車輛的行車紀錄器影片，希望能還原真相。但會後家屬們氣憤表示「要什麼沒有什麼」，會議過程氣氛很僵。",money:10000,paid:400},
    {id:9,time:"2016年7月17日",type:"搶劫",detail:"一銀盜領案 警方：13名嫌犯已出境",money:8000000,paid:5000},
    {id:10,time:"2016年7月22日",type:"火燒車",detail:"來台家屬昨晚在住都飯店說明會時，強烈要求台灣官方提供遊覽車起火，及過往車輛的行車紀錄器影片，希望能還原真相。但會後家屬們氣憤表示「要什麼沒有什麼」，會議過程氣氛很僵。",money:10000,paid:400}
];

var DetailContent = React.createClass({
    render: function() {
        return (
            <div>
                <SelectGroup/>
                <DetailTable tableRow={this.props.tableRow}/>
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
        var tableRowArray = this.props.tableRow.map(function(row) {
            return (
                <DetailTableRow key={row.id} time={row.time} type={row.type} detail={row.detail} money={row.money} paid={row.paid}/>
            );
        });
        return (
            <table id="transaction_details_table">
                <tbody>
                    <tr>
                        <th className="th">日期</th>
                        <th className="th">類型</th>
                        <th className="th">詳情</th>
                        <th className="th">金額</th>
                        <th className="th">已付</th>
                    </tr>
                    {tableRowArray}
                </tbody>
            </table>
        );
    }
});

var DetailTableRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td className="td">{this.props.time}</td>
                <td className="td">{this.props.type}</td>
                <td className="td">{this.props.detail}</td>
                <td className="td">{this.props.money}</td>
                <td className="td">{this.props.paid}</td>
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


ReactDOM.render(
    <DetailContent tableRow={tableRow}/>,
    document.getElementById('transaction_details_content')
);