function kapiancaozuoClick() {
    forwardTo1kapianCaozuo();
}
function kaPianGuanLiClick() {
    forwardTo2kapianGuanlied();
}
function liShiJiLuClick() {
    forwardTo3lishiJilu();
}
function geRenZhongXinClick() {
    forwardTo4gerenZhongxin();
}



function setYemian(path) {
    var yemian = document.getElementById("yemian");
    yemian.src = path;
}

function caiDanInit() {
    var kapiancaozuoImg = document.getElementById("kapiancaozuoImg");
    var kapianguanliImg = document.getElementById("kapianguanliImg");
    var lishijiluImg = document.getElementById("lishijiluImg");
    var gerenzhongxinImg = document.getElementById("gerenzhongxinImg");
    kapiancaozuoImg.src = "../resouce/imgs/卡片操作图标.png";
    kapianguanliImg.src = "../resouce/imgs/卡片管理图标.png";
    lishijiluImg.src = "../resouce/imgs/历史记录图标.png";
    gerenzhongxinImg.src = "../resouce/imgs/个人中心图标.png";
}

function forwardTo1kapianCaozuo()
{
    caiDanInit();
    var kapiancaozuoImg = document.getElementById("kapiancaozuoImg");
    kapiancaozuoImg.src = "../resouce/imgs/已点击卡片操作图标.png";
    setYemian("../html/yemian/1kaPianCaoZuo.html");
}
function forwardTo2kapianGuanlied()
{
    caiDanInit();
    var kapianguanliImg = document.getElementById("kapianguanliImg");
    kapianguanliImg.src = "../resouce/imgs/已点击卡片管理图标.png";
    setYemian("../html/yemian/2kaPianGuanLied.html");
}
function forwardTo3lishiJilu()
{
    caiDanInit();
    var lishijiluImg = document.getElementById("lishijiluImg");
    lishijiluImg.src="../resouce/imgs/已点击历史记录图标.png";
    setYemian("../html/yemian/3liShiJiLu.html");
}
function forwardTo4gerenZhongxin()
{
    caiDanInit();
    var gerenzhongxinImg = document.getElementById("gerenzhongxinImg");
    gerenzhongxinImg.src = "../resouce/imgs/个人中心图标_highlight.png";
    setYemian("../html/yemian/4geRenZhongXin.html");
}