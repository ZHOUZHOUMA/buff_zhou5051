//ggggg

toastLog("zhouma")
// BUFF启动("新星 | 极地网格 (久经沙场)")
// 购买目标1("FN57 | 暮色森林")
// 购买目标2("G3SG1 | 极地迷彩")
// 购买目标3("PP-野牛 | 都市虚线")
// 购买目标4("UMP-45 | 都市 DDPAT")
// 购买目标5("双持贝瑞塔 | 殖民侵略者")
// 购买目标6("新星 | 极地网格")
// 关闭后台()
// BUFF启动("MP7 | 森林 DDPAT(久经沙场)")
// 购买目标1("MP7 | 森林 DDPAT")
// 购买目标2("R8 左轮手枪 | 骸骨外罩")
// 购买目标3("SG 553 | 军队之辉")
// 购买目标4("Tec-9 | 都市 DDPAT")
// 购买目标5("内格夫 | 军队之辉")
// 购买目标6("截短霰弹枪 | 森林 DDPAT")
// 关闭后台()

function 找色价格008(jg) {
    刷新()
    var img = captureScreen();
    let clipimg = images.clip(img, 235, 635, 297 - 235, 660 - 635)
    let p = images.findMultiColors(clipimg, "#eea20e",
        [
            [5, 2, "#efaa23"],
            [-4, 2, "#eea20f"],
            [-4, 10, "#eea20e"],
            [4, 10, "#f8d696"],
            [0, 18, "#f0ae2c"],
            [-5, 16, "#f3bb4e"],
            [6, 16, "#f7d28a"],
            [12, 17, "#f1b032"],
            [12, 19, "#eea20e"],
            [24, 0, "#eea20e"],
            [29, 7, "#eea20e"],
            [17, 7, "#f8d899"],
            [24, 18, "#f0ab26"],
            [29, 15, "#f2b744"],
            [18, 15, "#eea312"],
            [34, 4, "#efa71b"],
            [45, 4, "#f3be56"],
            [45, 12, "#f3bb4f"],
            [45, 17, "#f6d084"],
            [37, 17, "#f5ca76"],
            [34, 17, "#f2b94a"],
            [40, 8, "#f8d797"],
            [40, 1, "#eea311"],
            [40, 18, "#efaa22"],
            [37, 17, "#f5ca76"],
            [37, 2, "#f1b239"]
        ]);
    if (p) {
        sleep(800);
        log("点击购买");
        click(642, 661);
        toastLog("1号位找到" + jg + "价格|(^-^)/");
        sleep(3300);
        if (text("支付确认").findOne(10)) {
            log("搜索支付确认")
            确认付款();
            sleep(500);
        } else {
            toastLog("被抢购");
            sleep(500);
        }
    } else {
        toastLog("1号位没找到" + jg + "价格╭(╯^╰)╮*****");
        sleep(2000);
    }
    clipimg.recycle();
}
function 找色价格009(jg) {
    刷新()
    var img = captureScreen();
    let clipimg = images.clip(img, 235, 635, 297 - 235, 660 - 635)
    let p = images.findMultiColors(clipimg, "#efa81d",
        [
            [-5, 3, "#eea312"],
            [6, 3, "#f2b846"],
            [6, 14, "#f2b744"],
            [-5, 14, "#eea312"],
            [-1, 17, "#eea310"],
            [11, 16, "#f7d189"],
            [13, 17, "#eea20e"],
            [21, -1, "#f1b53e"],
            [29, 2, "#f7d48e"],
            [19, 5, "#eea20e"],
            [18, 15, "#f3bb4e"],
            [29, 15, "#f7d28a"],
            [33, 5, "#f4c364"],
            [39, 0, "#efa71b"],
            [36, 18, "#f1b032"],
            [40, 16, "#efa71c"],
            [42, 13, "#f8dba1"],
            [45, 6, "#f0ae2c"]
        ]);
    if (p) {
        sleep(800);
        log("点击购买");
        click(642, 661);
        toastLog("1号位找到" + jg + "价格|(^-^)/");
        sleep(3300);
        if (text("支付确认").findOne(10)) {
            log("搜索支付确认")
            确认付款();
            sleep(500);
        } else {
            toastLog("被抢购");
            sleep(500);
        }
    } else {
        toastLog("1号位没找到" + jg + "价格╭(╯^╰)╮*****");
        sleep(2000);
    }
    clipimg.recycle();
}
function 找色价格01(jg) {
    刷新()
    var img = captureScreen();
    let clipimg = images.clip(img, 235, 635, 78, 26)
    let p = images.findMultiColors(clipimg, "#efa617",
        [
            [0, 18, "#eea20e"],
            [-7, 16, "#f3bb4e"],
            [4, 15, "#f2b744"],
            [-8, 8, "#f7d490"],
            [-7, 4, "#eea312"],
            [9, 19, "#f2b949"],
            [11, 17, "#f5cb79"],
            [16, 3, "#f3be58"],
            [23, 0, "#efa91f"],
            [21, 4, "#f5c76d"],
            [22, 19, "#eea20e"],
            [23, 16, "#eea414"],
            [43, 9, "#cbcbcb"],
            [43, 11, "#d5d5d5"],
            [43, 13, "#cbcbcb"],
            [43, 15, "#d8d8d8"],
            [46, 16, "#cbcbcb"],
            [46, 14, "#e9e9e9"],
            [46, 11, "#cecece"],
            [46, 9, "#cccccc"],
            [48, 8, "#dedede"],
            [48, 3, "#d2d2d2"],
            [52, 7, "#dcdcdc"],
            [52, 10, "#e2e2e2"],
            [52, 14, "#cbcbcb"],
            [58, 13, "#cccccc"],
            [143, -529, "#2a1e20"]
        ]);
    if (p) {
        sleep(800);
        log("点击购买");
        click(642, 661);
        toastLog("1号位找到" + jg + "价格|(^-^)/");
        sleep(3300);
        if (text("支付确认").findOne(10)) {
            log("搜索支付确认")
            确认付款();
            sleep(500);
        } else {
            toastLog("被抢购");
            sleep(500);
        }
    } else {
        toastLog("1号位没找到" + jg + "价格╭(╯^╰)╮*****");
        sleep(2000);
    }
    clipimg.recycle();
}
function 找色价格011(jg) {
    刷新()
    var img = captureScreen();
    let clipimg = images.clip(img, 235, 635, 61, 27)
    let p = images.findMultiColors(clipimg, "#eea20e",
        [
            [-1, 1, "#f1b43d"],
            [-1, 17, "#eea20e"],
            [0, 17, "#eea310"],
            [7, 13, "#efa81d"],
            [-5, 13, "#fbe9c6"],
            [-3, 5, "#eea20e"],
            [7, 5, "#eea20e"],
            [14, 16, "#f5cb79"],
            [12, 18, "#f2b949"],
            [19, 3, "#f4c66b"],
            [26, -1, "#efa91f"],
            [24, 3, "#f5c76d"],
            [24, 18, "#f5c76d"],
            [26, 18, "#eea414"],
            [35, 3, "#f4c66b"],
            [42, -1, "#efa91f"],
            [40, 3, "#f5c76d"],
            [40, 18, "#f5c76d"],
            [42, 18, "#eea414"],
            [42, 11, "#eea414"]
        ]);
    if (p) {
        sleep(800);
        log("点击购买");
        click(642, 661);
        toastLog("1号位找到" + jg + "价格|(^-^)/");
        sleep(3300);
        if (text("支付确认").findOne(10)) {
            log("搜索支付确认")
            确认付款();
            sleep(500);
        } else {
            toastLog("被抢购");
            sleep(500);
        }
    } else {
        toastLog("1号位没找到" + jg + "价格╭(╯^╰)╮*****");
        sleep(2000);
    }
    clipimg.recycle();
}
function 找色关闭() {
    var img = captureScreen();
    let clipimg = images.clip(img, 563, 744, 59, 35)
    let p = images.findMultiColors(clipimg, "#8aa6dc",
        [
            [13, 0, "#5d84cf"],
            [13, 2, "#527bcb"],
            [0, 2, "#85a2db"],
            [-4, 6, "#c8d5ef"],
            [17, 6, "#98b0e0"],
            [15, 6, "#4773c8"],
            [7, 6, "#4773c8"],
            [6, 10, "#4773c8"],
            [-5, 13, "#4a75c9"],
            [-5, 24, "#4874c8"],
            [18, 24, "#4773c8"],
            [13, 21, "#4a75c9"],
            [0, 21, "#7293d5"],
            [24, 0, "#b3c5e8"],
            [24, 6, "#4773c8"],
            [24, 25, "#4773c8"],
            [25, 25, "#8ca7dc"],
            [27, 20, "#819fd9"],
            [38, 20, "#5d83ce"],
            [47, 20, "#ffffff"],
            [33, 23, "#537ccc"],
            [46, 23, "#acc0e6"],
            [46, 1, "#b3c5e8"],
            [42, 1, "#567fcc"],
            [31, 1, "#567fcc"],
            [38, 5, "#6489d1"],
            [38, 8, "#5d83ce"],
            [42, 9, "#7193d4"],
            [28, 9, "#4a75c9"],
            [38, 15, "#5d83ce"],
            [36, 15, "#d4def2"]
        ])
    if (p) {
        toastLog("关闭");
        click(594, 753);
        sleep(1800);
    } else {
        sleep(1500);
        toastLog("查看购买记录");
        click(509, 712);
        sleep(3000);
        toastLog("返回");
        click(44, 94);
    }
    clipimg.recycle();
    sleep(8000);
}
function 刷新() {
    sleep(999);
    log("刷新")
    swipe(384, 750, 380, 1240, 436);
    sleep(1800);
}
function 确认付款() {
    let 付款 = className("android.widget.TextView").text("该卖家暂不支持支付宝付款");
    if (付款.findOne(10)) {
        while (true) {
            let 确认付款关闭 = className("android.widget.ImageView").id("close");
            if (确认付款关闭.findOne(1000)) {
                确认付款关闭.click();
                log("购买失败不支持支付宝,确认付款关闭");
                sleep(2000);
                break;
            }
        }
    } else {
        click("确认付款");
        log("确认付款");
        sleep(6500);
        if (text("支付成功！").findOne(10)) {
            log("支付成功！")
            sleep(500);
            if (text("创建报价").findOne(10)) {
                sleep(1800);
                log("创建报价")
                click(523, 779);
                sleep(21125);
                if (text("关闭").findOne(10)) {
                    sleep(1800);
                    click(598, 751);
                    toastLog("关闭");
                    sleep(1000);
                } else {
                    sleep(8000);
                    log("找色关闭")
                    找色关闭();
                }
            } else {
                sleep(4000);
                Log("登录发起报价");
            }
        } else {
            log("被抢购");
            sleep(2000);
        }
    }
}
function BUFF启动(mb) {
    launch("com.netease.buff");
    sleep(5000);
    waitForPackage("com.netease.buff");
    while (true) {
        let BUFF界面 = id("text").className("android.widget.TextView").text("BUFF");
        if (BUFF界面.findOne(100)) {
            sleep(1000);
            log("BUFF界面");
            sleep(2000);
        }
        break;
    }
    BUFF搜索("" + mb + "")
}
function BUFF搜索(mb1) {
    sleep(1900);
    click(200, 172)
    sleep(1900);
    click(236, 97)
    sleep(500);
    click(236, 97)
    sleep(1900);
    setClip(mb1);
    sleep(1900);
    paste();
    sleep(1900);
    click(662, 1220)
    sleep(10000);
    click(mb1)
    sleep(1900);
    click(195, 185)
    sleep(1900);
    click(53, 250)
    sleep(1900);
    swipe(320, 1279, 320, 2, 345);
    log("滑动");
    sleep(1900);
    swipe(320, 1279, 320, 2, 345);
    log("滑动");
    sleep(1900);
}
function 关闭后台() {
    recents();
    sleep(2000);
    swipe(355, 106, 355, 1210, 289);
    sleep(1000);
    swipe(355, 106, 355, 1210, 189);
    sleep(2000);
    click(623, 113);
    toastLog("关闭后台");
    sleep(200000);
}
function 判断价格(jgjg) {
    if (className("android.widget.TextView").text("FN57 | 暮色森林").findOne(100)) {
        log("列车停放站价格")
        sleep(500);
        toastLog("点击" + jgjg + "");
        click(jgjg);
        sleep(3000);
        破损不堪();
        久经沙场();
        略有磨损();
    } else {
        log("金库危机价格")
        sleep(500);
        toastLog("点击" + jgjg + "");
        click(jgjg);
        sleep(3000);
        破损不堪01();
        久经沙场01();
        略有磨损01();
    }
}
function 购买目标1(md) {
    判断价格("" + md + "")
}
function 购买目标2(md) {
    判断价格("" + md + "")
}
function 购买目标3(md) {
    判断价格("" + md + "")
}
function 购买目标4(md) {
    判断价格("" + md + "")
}
function 购买目标5(md) {
    判断价格("" + md + "")
}
function 购买目标6(md) {
    判断价格("" + md + "")
}
function 破损不堪() {
    toastLog("点击破损不堪");
    click(531, 318);
    sleep(1800);
    找色价格009("0.09")
    找色价格01("0.1")
    sleep(11100);
}
function 久经沙场() {
    toastLog("点击久经沙场");
    click(386, 324);
    sleep(1800);
    找色价格009("0.09")
    找色价格01("0.1")
    找色价格011("0.11")
    sleep(11100);
}
function 略有磨损() {
    toastLog("点击略有磨损");
    click(238, 319);
    sleep(1800);
    找色价格009("0.09")
    找色价格01("0.1")
    找色价格011("0.11")
    sleep(2000);
    toastLog("返回");
    click(55, 103);
    sleep(21999);
}
function 破损不堪01() {
    toastLog("点击破损不堪");
    click(531, 318);
    sleep(1800);
    找色价格008("0.08")
    找色价格009("0.09")
    sleep(11100);
}
function 久经沙场01() {
    toastLog("点击久经沙场");
    click(386, 324);
    sleep(1800);
    找色价格008("0.08")
    找色价格009("0.09")
    //找色价格01("0.1")
    sleep(11100);
}
function 略有磨损01() {
    toastLog("点击略有磨损");
    click(238, 319);
    sleep(1800);
    找色价格008("0.08")
    找色价格009("0.09")
    sleep(2000);
    toastLog("返回");
    click(55, 103);
    sleep(21999);
}