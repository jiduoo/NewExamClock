//page类，用来获取和修改页面元素
class page {
    constructor() {
        this.title = document.getElementsByClassName("title");
        this.title2 = document.getElementsByClassName("title2");
        this.center = document.getElementsByClassName("center");
        this.subject = document.getElementsByClassName("subject");
        this.time = document.getElementsByClassName("time");
        this.cutdown = document.getElementsByClassName("cutdown");
        this.sup = document.getElementsByClassName("sup");
        this.sub = document.getElementsByClassName("sub");
        this.barline = document.getElementsByClassName("bar-line");
        this.key = document.getElementById("key");


    }
    showtitle(ititle, num) {
        this.title[num].innerHTML = ititle;
    }
    showtitle2(ititle2, num) {
        this.title2[num].innerHTML = ititle2;
    }
    showcenter(icenter, num) {
        this.center[num].innerHTML = icenter;
    }
    showsubject(isubject, num) {
        this.subject[num].innerHTML = isubject;
    }
    showtime(itime, num) {
        this.time[num].innerHTML = itime;
    }
    showcutdown(icutdown, num) {
        this.cutdown[num].innerHTML = icutdown;
    }
    showsup(isup, num) {
        this.sup[num].innerHTML = isup;
    }
    showsub(isub, num) {
        this.sub[num].innerHTML = isub;
    }
    showbarline(ibar, num) {
        this.barline[num].style.width = ibar;
    }
    showkey(ikey) {
        this.key.innerHTML = ikey;
    }


}
let mainpage = new page();

//now类，now是一种此时此刻的状态
class now {
    constructor(itime) {
        this.time = itime;
    }
    centertime() {
        const date = this.time;
        let t = "";
        t += date.getHours();
        let m = date.getMinutes();
        m = m < 10 ? '0' + m : m;
        t += ":" + m
        return t;
    }
  

}

//date类，用来描述时间单元
class date {
    constructor(title2, subject, start, end) {

        this.title2 = title2;
        this.subject = subject;
        this.start = start;
        this.end = end;
    }
    run(inow, ipage, num) {
        ipage.showtitle2(this.title2, num);
        ipage.showsubject(this.subject, num);
        ipage.showtime(this.settime(), num);
        ipage.showsup(this.setsup(inow), num);
        ipage.showsub(this.setsub(inow), num);
        mainpage.showcutdown(this.setcutdown(inow, this.end), num);
        mainpage.showbarline(this.setbarline(inow), num);
    }
    settime() {
        const data = this.start;
        const data2 = this.end;
        let t = "";
        t += data.getHours();
        let m = data.getMinutes();
        m = m < 10 ? '0' + m : m;
        t += ":" + m + "~"
        t += data2.getHours();
        m = data2.getMinutes();
        m = m < 10 ? '0' + m : m;
        t += ":" + m
        return t;
    }
    setsup(inow) {
        if (Math.ceil(this.end.getTime() - inow.time.getTime()<0)) return " ";
        if (inow.time.getTime() <= this.start.getTime()) {
            return "距离开始";
        }
        else {
            return "距离结束";
        }
    }
    setsub(inow) {
        if (Math.ceil(this.end.getTime() - inow.time.getTime()<0)) return " ";
        if (Math.ceil((this.end.getTime() - inow.time.getTime()) / 1000 / 60) > 60) {
            return "h";
        }
        else {
            return "min";
        }
    }
    setcutdown(inow, end) {
        if (Math.ceil(end.getTime() - inow.time.getTime()>0)){
            if (Math.ceil((end.getTime() - inow.time.getTime()) / 1000 / 60) > 60) {
                return ((end.getTime() - inow.time.getTime()) / 1000 / 60 / 60).toFixed(1);
            }
            else {
                return Math.ceil((end.getTime() - inow.time.getTime()) / 1000 / 60);
            }
        }
        else return " ";
        
    }
    setbarline(inow) {
        let re = Math.ceil(((inow.time.getTime() - this.start.getTime()) / (this.end.getTime() - this.start.getTime()) * 100)) + "%";
        return re;
    }
}

datearray = [
    [
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),

    ],
    [
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),

    ],
    [
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),

    ],
    [
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),

    ],
    [
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),

    ],
    [
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),
        new date("课本基础知识大赛", "化学", new Date(2022, 7, 23, 16, 30), new Date(2022, 7, 23, 18, 00)),

    ],

];
// mode类，用来集合各种运行函数
class mode{
    constructor(){

    }
    key = 3;
    changekey(ikey){
        this.key = ikey;
        let keycontent = ['高一年级','高二理科','高二文科','高三理科','高三文科'];
        mainpage.showkey(keycontent[this.key]);
    }
}
let modego = new mode();

function check(imodego){
    let inowtime = new now(new Date());
    for(i=0;i<datearray[imodego.key].length;i++){  
        if(datearray[imodego.key][i].start.getTime()<=inowtime.time.getTime()&&inowtime.time.getTime()<datearray[imodego.key][i].end.getTime() ){
        swiper.slideTo(i,1000);
        break;
    } 
    }
}



update();
function update() {
    for (i = 0; i < mainpage.title.length; i++) {
        mainpage.showtitle("沉着冷静 诚信考试", i);
    }
    let nowtime = new now(new Date());
    for (i = 0; i < mainpage.center.length; i++) {
        mainpage.showcenter(nowtime.centertime(), i);
    }
    
    for(i=0;i<datearray[modego.key].length;i++){   
        datearray[modego.key][i].run(nowtime,mainpage,i); 
    }
    check(modego)
    setTimeout(update, 500);
    
}



//     let html='<div class="swiper-slide"><div class="cards card"><div class="left"><div class="title">考试标题</div><div class="title2">考试副标题</div> <div class="card1 card"><div class="clock"><iframe src="./ios-clock-master/index.html" frameborder="0"></iframe></div><div class="center">12:00</div></div></div><div class="right"><div class="card2 card"><div class="subject">科目</div><div class="time">12:00~13:00</div></div><div class="card card3"><span class="text"><span class="sup">距离结束</span><span class="cutdown">12.3</span><span class="sub">h</span></span><div class="bar-line"></div></div></div></div></div></div>'
//     for(i=0;i<datearray[0].length-1;i++){
     
//         swiper.appendSlide(html);
  
// }