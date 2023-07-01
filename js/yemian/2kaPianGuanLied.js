var n = 1;
function insertCard() {
    var newCard = document.createElement("div");
    newCard.className = "card2";
    newCard.innerHTML = n++;
    var cardContainer = document.getElementById("cardContainer");
    var firstCard = cardContainer.firstChild;
    cardContainer.insertBefore(newCard, firstCard);
}

// todo 删除第1张卡
async function deleteCard() {
    var x = document.getElementById("cardIndex").value;
    var cardContainer = document.getElementById("cardContainer");
    var cards = cardContainer.querySelectorAll(".card2");
    console.log('cards.length:'+cards.length,'x:'+x);
    if (cards.length == 0) {
        alert('cards长度为0');
        return;
    }
    if (cards.length < x) {
        alert('第' + x + '张卡片不存在');
        return;
    }
    if (!await deleteConfirm()) {
        return;
    }
    // 删除成功
    var cardToRemove = cards[x - 1];
    cardToRemove.remove();
    --n;
}

// 删除确认
async function deleteConfirm() {
    var flag;
    var url = "../../html/yemian/kapianguanli/xunwenshanchujiemian.html";
    var iframeId = 'popup';
    var popup = document.createElement('div');
    popup.className = 'popupBox';
    popup.innerHTML = '<iframe id=' + iframeId + ' src="' + url + '" width="100%" height="100%"></iframe>';
    document.body.appendChild(popup);
    var iframe = document.getElementById(iframeId);
    var embeddedwindow;
    await new Promise((resolve, reject) => {
        iframe.addEventListener('load', function () {
            embeddedwindow = iframe.contentWindow;
            resolve();
        })
    })
    await new Promise((resolve, reject) => {
        window.addEventListener('message', function (event) {//监听
            if (event.source === embeddedwindow) {
                if (event.data === 'ok') {
                    flag = true;
                    resolve();
                }
                if (event.data === 'cancel') {
                    flag = false;
                    resolve();
                }
            }
        })
    })
    popup.parentNode.removeChild(popup);
    return flag;
}
function tiaozhuanyemian22()
{
    window.location.href="../../html/yemian/22.html"
}