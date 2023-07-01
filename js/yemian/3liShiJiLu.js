
function kapianshiyongClick() {
    forwardTokapianshiyong();
}
function cunkashankaClick() {
    forwardTocunkashanka();
}
function geshihuaClick() {
    fowardTogeshihua();
}
function littlecaidanInit() {
    var kapianshiyong = document.getElementById("kapianshiyong");
    var cunkashanka = document.getElementById("cunkashanka");
    var geshihua = document.getElementById("geshihua");
    kapianshiyong.style.color = "rgb(0, 0, 0)";
    cunkashanka.style.color = "rgb(0, 0, 0)";
    geshihua.style.color = "rgb(0, 0, 0)";
}
function littlesetYemian(path) {
    var yemian = document.getElementById("3liShiJiLu");
    yemian.src = path;
}
function forwardTokapianshiyong() {
    littlecaidanInit();
    var kapianshiyong = document.getElementById("kapianshiyong");
    kapianshiyong.style.color = "rgb(46, 156, 254)";
    littlesetYemian("../../html/yemian/lishijilu/kapianshiyong.html")
}
function forwardTocunkashanka() {
    littlecaidanInit();
    var cunkashanka = document.getElementById("cunkashanka");
    cunkashanka.style.color = "rgb(46, 156, 254)";
    littlesetYemian("../../html/yemian/lishijilu/cunkashanka.html")
}
function fowardTogeshihua() {
    littlecaidanInit();
    var geshihua = document.getElementById("geshihua");
    geshihua.style.color = "rgb(46, 156, 254)";
    littlesetYemian("../../html/yemian/lishijilu/geshihua.html");
}