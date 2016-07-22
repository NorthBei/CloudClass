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
            <section class="page_section" id="content_section">
                <UploadPic/>
                <InputClassName/>
                <InputAboutClass/>
                <SelectClassTime/>
                <ClassPrice/>
                <ClassCategory/>
                <UploadMovie/>
                <ClassUnitList/>
                <CreatClass/>
            </section>
        );
    }
});

var UploadPic = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">課程圖片</h1>
                <section className="part_content">
                    <div className="upload_img">
                        <img className="upload_img_icon" src="pic/pic_icon.png" alt="圖片圖示"/>
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

var InputClassName = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">課程名稱</h1>
                <section className="part_content">
                    <input id="class_name" type="text"/>
                </section>
            </div>
        );
    }
});

var InputAboutClass = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">關於課程((學習目標&amp;適合群族&amp;自備用品</h1>
                <section className="part_content">
                    <textarea id="about_class">
                    </textarea>
                </section>
            </div>
        );
    }
});

var SelectClassTime = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">上課時間(課程時數&單一卡片多梯制</h1>
                <section className="part_content" id="class_time">
                    <div>
                        <select name="year" className="type_select">
                            <option value="">2016</option>
                            <option value="">2017</option>
                        </select>
                        <Select/>
                        <Select/>
                    </div>
                    <div>
                        <span>從</span>
                        <Select/>
                        <span>：</span>
                        <Select/>
                        <span>到</span>
                        <Select/>
                        <span>：</span>
                        <Select/>
                    </div>
                </section>
            </div>
        );
    }
});

var ClassPrice = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">課程價格</h1>
                <section className="part_content">
                    <span className="part_description">一小時</span>
                    <Select/>
                    <span className="part_description">TWD</span>
                </section>
            </div>
        );
    }
});

var Select = React.createClass({
    render: function() {
        return (
            <select name="" className="type_select short_select">
                <option value="">1</option>
                <option value="">2</option>
            </select>
        );
    }
});

var ClassCategory = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">課程分類</h1>
                <section className="part_content">
                    <div id="tag_box">
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                        <CategoryTag/>
                    </div>
                </section>
            </div>
        );
    }
});

var CategoryTag = React.createClass({
    render: function() {
        return (
            <div className="category_tag">程式</div>
        );
    }
});

var UploadMovie = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">課程影片</h1>
                <section className="part_content">
                    <div className="upload_img">
                        <img className="upload_img_icon" src="pic/upload_icon.png" alt="影片上傳圖示"/>
                    </div>
                    <div className="choice_button_wrapper">
                        <input className="true_choice_button" name="File" type="file" size="20"/>
                        <div className="fake_choice_button">選擇</div>
                    </div>
                </section>
            </div>
        );
    }
});

var ClassUnitList = React.createClass({
    render: function() {
        return (
            <div className="one_part">
                <h1 className="part_title">課程單元</h1>
                <section className="part_content">
                    <ol id="class_unit">
                        <ClassUnit/>
                        <ClassUnit/>
                        <ClassUnit/>
                        <ClassUnit/>
                    </ol>
                    <button id="add_class_unit">新增</button>
                </section>
            </div>
        );
    }
});

var ClassUnit = React.createClass({
    render: function() {
        return (
        <li className="li_class_unit_name">
            <div className="unit_input_group">
              <input className="class_unit_name" type="text" placeholder="Working"/>
              <img className="class_unit_delete_icon" src="pic/X.png" alt="刪除"/>
            </div>
          </li>
        );
    }
});

var CreatClass = React.createClass({
    render: function() {
        return (
            <section className="page_section" id="create_class_section">
                <button id="create_class">創建</button>
            </section>
        );
    }
});

window.addEventListener("load",function() {
    ReactDOM.render(
        <Body/>,
        document.getElementById('body')
    );
})
