var Student = React.createClass({

    toggleBell:function(event) {
      var bell = this.refs.bell;

      if(bell.style.visibility == "hidden" ){
        bell.style.visibility ="visible";
      }
      else{
        bell.style.visibility ="hidden";
      }
    },
    toggleMessage:function(event) {
        var message = this.refs.message;

        if(message.style.display == "none" ){
            message.style.display ="block";
        }
        else{
            message.style.display ="none";
        }
    },
    photoToggleZoom:function(event){
        // if visible is set remove it, otherwise add it
        this.refs.photo.classList.toggle("student_photo_zoom");
        this.bellToggleZoom();
    },
    bellToggleZoom:function(event){
        // if visible is set remove it, otherwise add it
        this.refs.bell.classList.toggle("bell_photo_zoom");
    },
    componentDidMount:function () {
        var photo = ReactDOM.findDOMNode(this.refs.photo);
        var box = ReactDOM.findDOMNode(this.refs.box);
        box.addEventListener("mouseover",this.toggleBell);
        box.addEventListener("dblclick",this.toggleMessage);
        box.addEventListener("click",this.photoToggleZoom);
    },
    render: function() {
        return (
            <div  ref="box"  className="student_phto_wrapper">
                <img ref="photo" className="student_phto" src="http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg" alt="學生大頭貼"/>
                <img ref="bell" className="bell" src="pic/bell.png" alt="鈴鐺圖示"/>
                <span ref="message" className="message_wrapper">
                    <div className="message_triangle"></div>
                    <div className="message_box">我會好好執政，捍衛太平島主權，台灣爛波萬</div>
                </span>
            </div>
        );
    }
});

var StudentList = React.createClass({
    render: function() {
        return (
            <div>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
                <Student/>
            </div>
        );
    }
});

ReactDOM.render(
    <StudentList/>,
    document.getElementsByClassName("overview")[0]
);