var data = [
    {id:1,title: "皮拉提斯運動法!一日20分鐘打造纖細身材", src: "pic/pexels-photo-12346-large.png", price: 200},
    {id:2,title: "烏克莉莉常用的18種和弦按法", src: "pic/pexels-photo-12346-large.png", price: 200},
    {id:3,title: "皮拉提斯運動法!一日20分鐘打造纖細身材", src: "pic/pexels-photo-12346-large.png", price: 200},
    {id:4,title: "烏克莉莉常用的18種和弦按法", src: "pic/pexels-photo-12346-large.png", price: 200},
    {id:5,title: "皮拉提斯運動法!一日20分鐘打造纖細身材", src: "pic/pexels-photo-12346-large.png", price: 200},
    {id:6,title: "烏克莉莉常用的18種和弦按法", src: "pic/pexels-photo-12346-large.png", price: 200}
];

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
        var slidesArray = this.props.data.map(function(slide) {
            return (
            <Slide key={slide.id} title={slide.title} src={slide.src} price={slide.price}/>
            );
        });
        return (
            <center>
                <h2 id="slide_title">在家輕鬆上課</h2>
                <h3 id="slide_subtitle">多樣化的課程，學你想學的</h3>
                <div className="slide_box">
                	{slidesArray}
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
                    <span className="slide_img_intro">{this.props.title}</span>
                    <div className="slide_img_wrapper">
                        <img  className="slide_img" src={this.props.src} alt=""/>
                    </div>
                    <div className="price_wrapper">
                        <span className="cost_icon">$</span>
                        <span className="price">{this.props.price}</span>
                        <span className="NTD">NTD</span>
                    </div>  
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <SlideList data={data}/>,
    document.getElementById('slide_page')
);