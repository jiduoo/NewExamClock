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
                return Math.ceil((end.getTime() - nowtime.time.getTime()) / 1000 / 60 / 60);
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
        [new timer("月考", "语文", new Date(2022, 3, 6, 2, 00), new Date(2022, 3, 6, 22, 10)),
        new timer("月考", "数学", new Date(2022, 3, 6, 22, 10), new Date(2022, 3, 6, 22, 20)),
        new timer("月考", "英语", new Date(2022, 3, 6, 22, 20), new Date(2022, 3, 6, 22, 30)),
        new timer("月考", "化学", new Date(2022, 3, 6, 22, 30), new Date(2022, 3, 6, 22, 40)),
        new timer("月考", "生物", new Date(2022, 3, 6, 22, 40), new Date(2022, 3, 6, 22, 50)),
        new timer("月考", "物理", new Date(2022, 3, 6, 22, 50), new Date(2022, 3, 2, 23, 00)),

        ],
        [new timer("水考模拟考", "政治", new Date(2022, 3, 14, 12, 40), new Date(2022, 3, 14, 13, 10)),
        new timer("水考模拟考", "历史", new Date(2022, 3, 14, 15, 30), new Date(2022, 3, 14, 16, 00)),
        new timer("水考模拟考", "讲评", new Date(2022, 3, 14, 17, 15), new Date(2022, 3, 14,18, 00)),
        new timer("水考模拟考", "地理", new Date(2022, 3, 7, 19, 00), new Date(2022, 3, 7, 20, 30)),
        new timer("水考模拟考", "生物", new Date(2022, 3, 7, 15, 50), new Date(2022, 3, 7, 17, 20)),
        new timer("水考模拟考", "讲评", new Date(2022, 3, 7, 17, 30), new Date(2022, 3, 7, 17, 55)),
        new timer("水考模拟考", "物理", new Date(2022, 3, 8, 7, 40), new Date(2022, 3, 8, 9, 10)),
        new timer("水考模拟考", "化学", new Date(2022, 3, 8, 9, 30), new Date(2022, 3, 8, 11, 00)),
        new timer("水考模拟考", "技术", new Date(2022, 3, 8, 11, 00), new Date(2022, 3, 8, 12, 10)),
        ],
        [new timer("水考模拟考", "政治", new Date(2022, 3, 7, 7, 40), new Date(2022, 3, 7, 9, 10)),
        new timer("水考模拟考", "历史", new Date(2022, 3, 7, 9, 30), new Date(2022, 3, 7, 11, 00)),
        new timer("水考模拟考", "讲评", new Date(2022, 3, 7, 11, 15), new Date(2022, 3, 7, 12, 00)),
        new timer("水考模拟考", "地理", new Date(2022, 3, 7, 14, 00), new Date(2022, 3, 7, 15, 30)),
        new timer("水考模拟考", "生物", new Date(2022, 3, 7, 15, 50), new Date(2022, 3, 7, 17, 20)),
        new timer("水考模拟考", "讲评", new Date(2022, 3, 7, 17, 30), new Date(2022, 3, 7, 17, 55)),
        new timer("水考模拟考", "物理", new Date(2022, 3, 8, 7, 40), new Date(2022, 3, 8, 9, 10)),
        new timer("水考模拟考", "化学", new Date(2022, 3, 8, 9, 30), new Date(2022, 3, 8, 11, 00)),
        new timer("水考模拟考", "技术", new Date(2022, 3, 8, 11, 00), new Date(2022, 3, 8, 12, 10)),
        ],
        [new timer("测试二", "语文", new Date(2022, 3, 6, 2, 00), new Date(2022, 3, 6, 22, 10)),
        new timer("测试二", "数学", new Date(2022, 3, 6, 22, 10), new Date(2022, 3, 6, 22, 20)),
        new timer("测试二", "英语", new Date(2022, 3, 6, 22, 20), new Date(2022, 3, 6, 22, 30)),
        new timer("测试二", "化学", new Date(2022, 3, 6, 22, 30), new Date(2022, 3, 6, 22, 40)),
        new timer("测试二", "生物", new Date(2022, 3, 6, 22, 40), new Date(2022, 3, 6, 22, 50)),
        new timer("测试二", "物理", new Date(2022, 3, 6, 22, 50), new Date(2022, 3, 6, 23, 00)),
        ],
        [new timer("测试三", "语文", new Date(2022, 3, 6, 2, 00), new Date(2022, 3, 6, 22, 10)),
        new timer("测试三", "数学", new Date(2022, 3, 6, 22, 10), new Date(2022, 3, 6, 22, 20)),
        new timer("测试三", "英语", new Date(2022, 3, 6, 22, 20), new Date(2022, 3, 6, 22, 30)),
        new timer("测试三", "化学", new Date(2022, 3, 6, 22, 30), new Date(2022, 3, 6, 22, 40)),
        new timer("测试三", "生物", new Date(2022, 3, 6, 22, 40), new Date(2022, 3, 6, 22, 50)),
        new timer("测试三", "物理", new Date(2022, 3, 6, 22, 50), new Date(2022, 3, 6, 23, 00)),
        ],
        [new timer("测试四", "语文", new Date(2022, 3, 6, 2, 00), new Date(2022, 3, 6, 22, 10)),
        new timer("测试四", "数学", new Date(2022, 3, 6, 22, 10), new Date(2022, 3, 6, 22, 20)),
        new timer("测试四", "英语", new Date(2022, 3, 6, 22, 20), new Date(2022, 3, 6, 22, 30)),
        new timer("测试四", "化学", new Date(2022, 3, 6, 22, 30), new Date(2022, 3, 6, 22, 40)),
        new timer("测试四", "生物", new Date(2022, 3, 6, 22, 40), new Date(2022, 3, 6, 22, 50)),
        new timer("测试四", "物理", new Date(2022, 3, 6, 22, 50), new Date(2022, 3, 6, 23, 00)),
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

