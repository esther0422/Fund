/*最开始的轮播图*/
//JSON格式数据
var data = [
	{
		name : "我是图片1",
		anchorHref : "https://www.baidu.com/",
		imageUrl : "https://img.alicdn.com/tps/TB1kZP8NXXXXXXyaXXXXXXXXXXX-540-500.jpg_q90.jpg"
	},
	{
		name : "我是图片2",
		anchorHref : "http://www.qq.com/",
		imageUrl : "https://img.alicdn.com/tps/TB1ZiUVNXXXXXcsXpXXXXXXXXXX-540-500.jpg_q90.jpg"
	},
	{
		name : "我是图片3",
		anchorHref : "https  ://www.taobao.com/",
		imageUrl : "https://img.alicdn.com/tps/TB1I.FZNpXXXXb7XFXXXXXXXXXX-540-500.jpg_q90.jpg"
	},
	{
		name : "我是图片4",
		anchorHref : "https://www.tmall.com/",
		imageUrl : "https://img.alicdn.com/tps/TB1xYyaNpXXXXXJXpXXXXXXXXXX-540-500.jpg_q90.jpg"
	},
	{
		name : "我是图片5",
		anchorHref : "https://www.163.com/",
		imageUrl : "https://img.alicdn.com/tps/TB11DXhNpXXXXbEapXXXXXXXXXX-540-500.jpg_q90.jpg"
	}
];
//创建一个轮播图组件
Banner({
	element : ".banner", //必需, 轮播图插入的页面位置 (选择器字符串)
	keywords : { //必需, 字段名称 (参照以上data格式, 与data配置数据共同作用)
		title : "name", //必需, 图片标题字段名称
		href : "anchorHref", //必需, 图片链接字段名称
		url : "imageUrl" //必需, 图片地址字段名称
	},
	data : data, //必需, 数据 (参照以上data格式, 与keywords配置字段名称共同作用)
	theme : 2, //非必需, 轮播主题 (默认0:切换, 1:淡入淡出, 2:滑动)
	controller : 1, //非必需, 是否启用前后翻页控制 (默认0:不启用, 1:启用)
	indicator : 2, //非必需, 指针主题 (默认0:不启用, 1:方块, 2:圆点, 3:宽矩形)
	duration : 4 //非必需, 轮播秒数间隔 (默认2)
});


/*-----------------------热门推荐------------------------*/
var $leftIcon = $(".left-icon"),
	$rightIcon = $(".right-icon"),
	$showBox = $(".showBox"),
	count = 0,
	leftcount = 0;
$rightIcon.click(function(){
	count = count + 1;
	$leftIcon.css("display", "block");
	if(count<4){
		$showBox.css("left", -242 * count + "px");
	}else{
		$rightIcon.css("display", "none");
	}
});

$leftIcon.click(function() {
	leftcount = leftcount + 1;
	console.log(leftcount)
	$rightIcon.css("display", "block");
	if(leftcount < 3){
		$showBox.css("left", (-242 * count) + 242 * leftcount + "px");
	}else{
		$leftIcon.css("display", "none");
	}
});





 /*--------------------类目精选楼层创建-----------------*/

$("body").append("<script src=\"http://ikindness.cn/api/test/getFund?jsonp=1\"></script>");
var $categoryBox = $(".category .main");
function jsonpCallback(data){
	var _data = data.code ? [] : data.data;
	var arrData = [],
		index = 0,
		len = _data.length / 8;
	for(; index < len; index++){
		arrData[index] = _data.filter(function(item){

			return item.type == index + 1;
		});
	}
	arrData.forEach(function(item){

		createFloor(item);
	});
}
function createFloor(option){
	var boxes = "",
		floorTitle = ["1F 科技", "2F 生活", "3F 设计", "4F 娱乐", "5F 食品", "6F 公益"];
	option.forEach(function(item, index){
		if(index != 0) {
			var span = "";
			for(var i = 0; i < item.label.length; i++){
				span +="<span class=\"lab\">" + item.label[i] + "</span>";
			}
			boxes += "<div class=\"box\">" + 
				"<img src=\"" + item.image + "\" >" +
				"<a class=\"text\" href=\"\">" + item.name + "</a>" + span +
				"<div class=\"underline\">" + "</div>" +
				"<span>" +"<a>" + item.rate+ "%" + "</a>" + "<a>" + "达成率" +"</a>" + "</span>" +
				"<span>" + "<a>" + item.sum +"</a>"+ "</a>" + "<a>" + "已酬金额" +"</a>" + "</span>" +
				"<span>" + "<a>" + item.amount +"</a>" + "</a>" + "<a>" + "支持人数" +"</a>" + "</span>" +
			"</div>";
		}else{
			boxes += "<div class=\"box\">" + 
					"<img src=\"" + item.image + "\" >" +
					"<a class=\"text\" href=\"\">" + item.name + "</a>" +
					"<span>" + "<a href=\"\">" + "已酬金额" +"</a>" + "<a href=\"\">" + "￥" + item.sum +"</a>"+ "</span>" +
					"<div class=\"project\">" + 
						"<a href=\"\">" + "查看项目" +"</a>" + "<a href=\"\">" + " > " + "</a>"+ 
					"</div>" +
				"</div>";
		}
	
	});
	$(".floor").html(boxes);
	for(var i = 0; i < 6; i++){
		$(".floor-info").html("<span class=\"floorName\">" + floorTitle[i] + "</span>" + 
							"<span class=\"flooricon\">" + "▶" + "</span>" +
							"<span class=\"floorline\">" + "" + "</span>");
	}
	
	$categoryBox.append("<div class=\"floor\"></div>");
	$(".floor").prepend("<div class=\"floor-info\"></div>");

}



 /*----------------------------------人气排行--------------*/


	

