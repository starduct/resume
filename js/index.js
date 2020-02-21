//下面是header区域的JS文件
var dom=new Tool();
var explain=document.getElementById('explain');
var headerList=dom.getElementsByClassName(explain,'header-list');
for(var i=0;i<headerList.length;i++){
    headerList[i].onmouseover=function(e){
        e=e||window.event;
        goodE(e);
        var tooltip= document.createElement("div");
        tooltip.id="tooltip";
        var oImg= document.createElement("img");
        oImg.src=this.href;
        tooltip.appendChild(oImg);
        tooltip.style.left= e.clientX+10+"px";
        tooltip.style.top= e.clientY+20+"px";
        document.body.appendChild(tooltip);//在全局里面加的，
        tooltip.style.display="block";

    };
    headerList[i].onmousemove=function(e){
        e=e||window.event;
        goodE(e);
        var tooltip=document.getElementById("tooltip");
        if(tooltip){
            tooltip.style.left= e.clientX+10+"px";
            tooltip.style.top= e.clientY+0+"px";
        }
    };
    headerList[i].onmouseout=function(e){
        e=e||window.event;
        goodE(e);
        document.body.removeChild(tooltip);
    }
}
//处理IE事件的
function goodE(e){
    e=e||window.event;
    if(!e.target){
        e.target= e.srcElement;
        e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+ e.clientX;
        e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+ e.clientY;
        e.stopPropagation=function(){e.cancelBubble=true;}//阻止事件传播;
        e.preventDefault=function(){e.returnValue=false;}//阻止事件默认行为;
    }
    return e;
}
//header区域结束

//导航条区域开始
var contactInformation = document.getElementById("contactInformation");
var contact = document.getElementById("contact");
contact.onmouseover=function(){
    contactInformation.style.display="block";
};
contact.onmouseout=function(){
    contactInformation.style.display="none";
};
contactInformation.onmouseover=function(){
    contactInformation.style.display="block";
};
contactInformation.onmouseout=function(){
    contactInformation.style.display="none";
};
//导航条区域结束

//省市区三级
addressInit('province', 'city', 'area', '北京', '市辖区', '海淀区');
//鼠标悬停提示
var rent=document.getElementById("rent");
var distributionTime=document.getElementById("distributionTime");
var xiaoxi1=document.getElementById("xiaoxi1");
var xiaoxi2=document.getElementById("xiaoxi2");
rent.onmouseover=function(){show(xiaoxi1)};
rent.onmouseout=function(){none(xiaoxi1)};
distributionTime.onmouseover=function(){show(xiaoxi2)};
distributionTime.onmouseout=function(){none(xiaoxi2)};
function show(ele){
    ele.style.display="block";
};
function none(ele){
    ele.style.display="none";
}
//商品数量增加
var mallNum=document.getElementById("mallNum");
var flag=document.getElementById("flag");
var reduce=dom.getElementsByClassName(mallNum,"reduce")[0];
var plus=dom.getElementsByClassName(mallNum,"plus")[0];
var content=dom.getElementsByClassName(mallNum,"content")[0];
reduce.onclick=function() {
    if(content.innerText<2) return;
    content.innerText--;
    if(content.innerText==1){
        flag.className="right-right";
    };
};
plus.onclick=function(){
    content.innerText++;
    flag.className="right-right flag";
};
//商品介绍区域结束

//拖拽的效果开始
//这里单开了一个JS文件夹，在drag里面
//拖拽的效果结束

//公司历程的部分开始


//根据我们的json数据，将html动态添加到页面中


var menuBody=document.getElementById("menuBody");
var menuChild=dom.getElementsByClassName(menuBody,"menu-child-body");
var menuBodyH3=menuBody.getElementsByTagName("h3");
var menuBodySpan=menuBody.getElementsByTagName("span");
for(var i= 0,len=menuBodyH3.length;i<len;i++){
    menuBodyH3[i].index=i;
    menuBodyH3[i].onmouseover=function() {
        menuChange(this.index);
    }
}
//下面是工作经历的改变函数
function menuChange(index){
    for(var i=0;i<menuChild.length;i++){
        menuBodySpan[i].className="bg2";
        menuBodyH3[i].className="";
        menuChild[i].className="menu-child-body";
    }
    menuBodySpan[index].className="bg1";
    menuBodyH3[index].className="";
    menuChild[index].className="menu-child-body select";
}

//公司历程的部分结束
