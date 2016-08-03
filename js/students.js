var users = [
    
    {id:"photo_1",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_2",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然在人類身上，動物們雖然在人類身上，動物們雖然在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類"},
    {id:"photo_3",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_4",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_5",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_6",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_7",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_8",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_9",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_10",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_11",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_12",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_13",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_14",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能「人要衣裝，佛要金裝」，現在這句話可不僅能「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可一點都不輸給人類！"},
    {id:"photo_15",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_16",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_17",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_18",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_19",name:"Rock",photo:"http://img.ltn.com.tw/2016/new/jan/4/images/bigPic/400_400/php0lVqQo.jpg",msg:"我會好好執政，捍衛太平島主權，台灣爛波萬"},
    {id:"photo_20",name:"RruBA",photo:"http://imgs.niusnews.com/upload/imgs/default/13AprCh/YagoPartal2013/1.jpg",msg:"有句話說：「人要衣裝，佛要金裝」，現在這句話可不僅能套在人類身上，動物們雖然也有毛皮的保護，但要是認真打扮起來可是一點都不輸給人類！"},
    {id:"photo_21",name:"John",photo:"https://pbs.twimg.com/profile_images/692923519752101889/NCr54N6z.jpg",msg:"WowWee! CHiP and Miposaur are featured in the April edition of "},
];

var Student = React.createClass({
    toFirst:function() {
        var box = ReactDOM.findDOMNode(this.refs.box);
        var parent = box.parentNode;
        var first = parent.firstChild;
        parent.insertBefore(box, first);
    },
    toggleBell:function() {
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
        $(".message_box").mCustomScrollbar({snapAmount:5});

        var photo = ReactDOM.findDOMNode(this.refs.photo);
        var box = ReactDOM.findDOMNode(this.refs.box);
        //box.addEventListener("mouseover",this.toggleBell);
        box.addEventListener("click",this.toggleMessage);
        box.addEventListener("dblclick",this.photoToggleZoom);
    },
    render: function() {
        return (
            <div  ref="box" id={this.props.id} className="student_phto_wrapper">
                <img ref="photo" className="student_phto" src={this.props.photo} alt="學生大頭貼"/>
                <img ref="bell" className="bell" src="pic/bell.png" alt="鈴鐺圖示"/>
                <span ref="message" className="message_wrapper">
                    <div className="message_owner">{this.props.name}</div>
                    <div className="message_triangle"></div>
                    <div className="message_box">{this.props.msg}</div>
                </span>
            </div>
        );
    }
});

var StudentList = React.createClass({
    getPhotoById:function(photoID) {
        return this.refs[photoID];
    },
    componentDidMount:function () {

        //this.getPhotoById("photo_1").toggleBell();
        this.getPhotoById("photo_21").toFirst();

        this.initLeftScrollBar();

    },
    initLeftScrollBar:function() {
        // var $scrollbar  = $('#scrollbar1')
        //                 ,   $overview   = $scrollbar.find(".overview")
        //                 ,   loadingData = false
        //                 ;

        // $scrollbar.tinyscrollbar({thumbSize : 60});

        // var scrollbarData = $scrollbar.data("plugin_tinyscrollbar")

        // $scrollbar.bind("move", function(){
        //     // The threshold will enable us to start loading the text before we reach the end.
        //     //
        //     var threshold       = 0.9
        //     ,   positionCurrent = scrollbarData.contentPosition + scrollbarData.viewportSize
        //     ,   positionEnd     = scrollbarData.contentSize * threshold
        //     ;

        //     // Check if have reached the "end" and that we arent allready in the process of loading new data.
        //     //
        //     if(!loadingData && positionCurrent >= positionEnd){

        //         loadingData = true;

        //         $.getJSON("data.json", function(data){
        //             loadingData = false;

        //             $overview.append(data.text)

        //             scrollbarData.update("relative");
        //         });
        //     }
        // });

                var $scrollbar = document.getElementById("photo_scrollbar")
                ,   scrollbar  = tinyscrollbar($scrollbar)
                ;

                // You can now call methods liks scrollbar.update() or scrollbar.contentPosition

                // Here is a example how you can bind the move event to the scrollbar container.
                //
                $scrollbar.addEventListener("scroll", function(event){
                    console.log("scrollbar scrolling");
                    console.log(scrollbar.contentPosition);
                    console.log(event.target);
                    if (event.stopPropagation) {
                        // W3C standard variant
                        event.stopPropagation();
                    } else {
                        // IE variant
                        event.cancelBubble = true;
                    }
                }, false);
    },
    render: function() {
        var users = this.props.users.map(function(user) {
            return (
                <Student key={user.id} ref={user.id} name={user.name} photo={user.photo} msg={user.msg}/>
            );
        });

        return (
            <div>
                {users}
            </div>
        );
    }

});

ReactDOM.render(
    <StudentList users={users}/>,
    document.getElementsByClassName("overview")[0]
);

var setting_icon = document.getElementById("setting_icon");
var setting_box_visual = document.getElementById("setting_box_visual");

setting_icon.addEventListener("click",function(){
    console.log(setting_box_visual.style.display);
    if(setting_box_visual.style.display == "block" ){
        setting_box_visual.style.display ="none";
    }
    else{
        setting_box_visual.style.display ="block";
    }
},false);