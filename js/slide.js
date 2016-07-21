var SlideList = React.createClass({
    componentDidMount :  function ()  { 
		$('.slide_box').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow:"<img id='left_arrow' src='pic/slide_arrow_left.png'>",
            nextArrow:"<img id='right_arrow' src='pic/slide_arrow_right.png'>"
        });
	},
    render: function() {
        return (
            <center>
                <h2 id="slide_title">在家輕鬆上課</h2>
                <h3 id="slide_subtitle">多樣化的課程，學你想學的</h3>
                <div className="slide_box">
                	<Slide/>
                    <Slide/>
                    <Slide/>
                    <Slide/>
                    <Slide/>
                    <Slide/>
                </div>
            </center>
        );
    }
});

var Slide = React.createClass({
    render: function() {
        return (
            <div className="slide_content">
                <div className="wrapper">
                    <span className="slide_img_intro">皮拉提斯運動法!一日20分鐘打造纖細身材</span>
                    <div className="slide_img_wrapper">
                        <img  className="slide_img" src="pic/pexels-photo-12346-large.png" alt=""/>
                    </div>
                    <div className="price_wrapper">
                        <span className="cost_icon">$</span>
                        <span className="price">200</span>
                        <span className="NTD">NTD</span>
                    </div>  
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <SlideList/>,
    document.getElementById('slide_page')
);