class page {
    constructor() {
        this.center = document.getElementById("center");
        this.title2 = document.getElementById("title2");
        this.number = document.getElementById("number");
        this.suffix = document.getElementById("suffix");
        this.time = document.getElementById("time");
        this.sub = document.getElementById("sub");
        this.subject = document.getElementById("subject");
        this.barLine = document.getElementById("bar-line");


    }
    show(icenter, ititle2, countdown, suffix, sub, time, subject, barLineWidth, barLine) {
        this.center.innerHTML = icenter;
        this.title2.innerHTML = ititle2;
        this.number.innerHTML = countdown;
        this.suffix.innerHTML = suffix;
        this.sub.innerHTML = sub;
        this.time.innerHTML = time;
        this.subject.innerHTML = subject;
        this.barLine.style.width = barLineWidth;
        this.barLine.innerHTML = barLine;

    }
}

class now {
    constructor(itime) {
        this.time = itime;
        // this.key = 1;
        this.center_time = this.centertime();
    }
    setp(ip) {
        this.p = ip;
    }

    centertime() {
        const data = this.time;
        let t = "";
        t += data.getHours();
        let m = data.getMinutes();
        m = m < 10 ? '0' + m : m;
        t += ":" + m;
        return t;
    }
    // show_center_time() {
    //     mainpage.show(this.center_time, "第一次月考");
    // }
    // 这个是一个测试用的函数
}

let key = { key: 1 };
function changekey(ikey) {
    key.key = ikey;
}


let mainpage = new page();

update();

function update() {
    let nowtime = new now(new Date());

    class timer {
        constructor(title2, subject, start, end) {
            // a=Date.now();
            this.title2 = title2;
            this.subject = subject;
            this.start = start;
            this.end = end;
            this.suffix = this.setSuffix();
            this.sub = this.setSub();
            this.time = this.settime();
            this.barLineWidth = Math.ceil(((nowtime.time.getTime() - this.start.getTime()) / (this.end.getTime() - this.start.getTime()) * 100)) + "%";
        }
        setCountdown(end) {
            if (Math.ceil((end.getTime() - nowtime.time.getTime()) / 1000 / 60) > 60) {
                this.suffix = "h"
                return ((end.getTime() - nowtime.time.getTime()) / 1000 / 60 / 60).toFixed(1);
            }
            else {
                this.suffix = "min";
                return Math.ceil((end.getTime() - nowtime.time.getTime()) / 1000 / 60);
            }
        }
        setSuffix() {
            if (Math.ceil((this.end.getTime() - nowtime.time.getTime()) / 1000 / 60) > 60) {
                return "h";
            }
            else {
                return "min";
            }

        }
        setSub() {
            if (nowtime.time.getTime() <= this.start.getTime()) {
                return "距离开始";
            }
            else {
                return "距离结束";
            }
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
        run() {
            if (nowtime.time <= this.start) {
                mainpage.show(nowtime.center_time, this.title2, this.setCountdown(this.start), this.suffix, this.sub, this.time, this.subject, "0%", "0%");
            }
            else {
                mainpage.show(nowtime.center_time, this.title2, this.setCountdown(this.end), this.suffix, this.sub, this.time, this.subject, this.barLineWidth, this.barLineWidth);
            }

        }
    }






timerbar = [
        [new timer("高二理科期中考试（文科绕行）", "语文", new Date(2022, 4, 3, 9, 30), new Date(2022, 4, 3, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "物理", new Date(2022, 4, 3, 14, 20), new Date(2022, 4, 3, 16, 00)),
        new timer("高二理科期中考试（文科绕行）", "生物", new Date(2022, 4, 3, 16, 30), new Date(2022, 4, 3,18, 10)),
        new timer("高二理科期中考试（文科绕行）", "英语", new Date(2022, 4, 4, 7, 50), new Date(2022, 4, 4, 9, 50)),
        new timer("高二理科期中考试（文科绕行）", "化学", new Date(2022, 4, 4, 10, 20), new Date(2022, 4, 4, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "数学", new Date(2022, 4, 4, 14, 20), new Date(2022, 4, 4, 16, 20)),
        ],
        [new timer("高二理科期中考试（文科绕行）", "语文", new Date(2022, 4, 3, 9, 30), new Date(2022, 4, 3, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "物理", new Date(2022, 4, 3, 14, 20), new Date(2022, 4, 3, 16, 00)),
        new timer("高二理科期中考试（文科绕行）", "生物", new Date(2022, 4, 3, 16, 30), new Date(2022, 4, 3,18, 10)),
        new timer("高二理科期中考试（文科绕行）", "英语", new Date(2022, 4, 4, 7, 50), new Date(2022, 4, 4, 9, 50)),
        new timer("高二理科期中考试（文科绕行）", "化学", new Date(2022, 4, 4, 10, 20), new Date(2022, 4, 4, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "数学", new Date(2022, 4, 4, 14, 20), new Date(2022, 4, 4, 16, 20)),
        ],
        [new timer("高二理科期中考试（文科绕行）", "语文", new Date(2022, 4, 3, 9, 30), new Date(2022, 4, 3, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "物理", new Date(2022, 4, 3, 14, 20), new Date(2022, 4, 3, 16, 00)),
        new timer("高二理科期中考试（文科绕行）", "生物", new Date(2022, 4, 3, 16, 30), new Date(2022, 4, 3,18, 10)),
        new timer("高二理科期中考试（文科绕行）", "英语", new Date(2022, 4, 4, 7, 50), new Date(2022, 4, 4, 9, 50)),
        new timer("高二理科期中考试（文科绕行）", "化学", new Date(2022, 4, 4, 10, 20), new Date(2022, 4, 4, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "数学", new Date(2022, 4, 4, 14, 20), new Date(2022, 4, 4, 16, 20)),
        ],
        [new timer("高二理科期中考试（文科绕行）", "语文", new Date(2022, 4, 3, 9, 30), new Date(2022, 4, 3, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "物理", new Date(2022, 4, 3, 14, 20), new Date(2022, 4, 3, 16, 00)),
        new timer("高二理科期中考试（文科绕行）", "生物", new Date(2022, 4, 3, 16, 30), new Date(2022, 4, 3,18, 10)),
        new timer("高二理科期中考试（文科绕行）", "英语", new Date(2022, 4, 4, 7, 50), new Date(2022, 4, 4, 9, 50)),
        new timer("高二理科期中考试（文科绕行）", "化学", new Date(2022, 4, 4, 10, 20), new Date(2022, 4, 4, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "数学", new Date(2022, 4, 4, 14, 20), new Date(2022, 4, 4, 16, 20)),
        ],
        [new timer("高二理科期中考试（文科绕行）", "语文", new Date(2022, 4, 3, 9, 30), new Date(2022, 4, 3, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "物理", new Date(2022, 4, 3, 14, 20), new Date(2022, 4, 3, 16, 00)),
        new timer("高二理科期中考试（文科绕行）", "生物", new Date(2022, 4, 3, 16, 30), new Date(2022, 4, 3,18, 10)),
        new timer("高二理科期中考试（文科绕行）", "英语", new Date(2022, 4, 4, 7, 50), new Date(2022, 4, 4, 9, 50)),
        new timer("高二理科期中考试（文科绕行）", "化学", new Date(2022, 4, 4, 10, 20), new Date(2022, 4, 4, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "数学", new Date(2022, 4, 4, 14, 20), new Date(2022, 4, 4, 16, 20)),
        ],
        [new timer("高二理科期中考试（文科绕行）", "语文", new Date(2022, 4, 3, 9, 30), new Date(2022, 4, 3, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "物理", new Date(2022, 4, 3, 14, 20), new Date(2022, 4, 3, 16, 00)),
        new timer("高二理科期中考试（文科绕行）", "生物", new Date(2022, 4, 3, 16, 30), new Date(2022, 4, 3,18, 10)),
        new timer("高二理科期中考试（文科绕行）", "英语", new Date(2022, 4, 4, 7, 50), new Date(2022, 4, 4, 9, 50)),
        new timer("高二理科期中考试（文科绕行）", "化学", new Date(2022, 4, 4, 10, 20), new Date(2022, 4, 4, 12, 00)),
        new timer("高二理科期中考试（文科绕行）", "数学", new Date(2022, 4, 4, 14, 20), new Date(2022, 4, 4, 16, 20)),
        ],



    ];
    
    nowtime.setp(0);

    for (i = 0; i < timerbar[key.key].length; i++) {
        if (timerbar[key.key][i].end <= nowtime.time) {
            nowtime.setp(i + 1);
            console.log(nowtime.p);
        }
        else break;

    }

    if (nowtime.time > timerbar[key.key][timerbar[key.key].length - 1].end) {
        mainpage.show(nowtime.center_time, "考试结束了", " ", " ", " ", " ", " ", "100%", "100%");
    }
    else {
        timerbar[key.key][nowtime.p].run();
    }


    setTimeout(update, 100);
}

