/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/
let currentImgNum = 1;
let container = document.getElementsByClassName("container")[0];
let wrap = document.getElementsByClassName("wrap")[0];
let timer = null;
let nextImg = function () {
    currentImgNum = document.getElementsByClassName("on")[0].innerText;
    if (currentImgNum !== "5"){
        document.getElementsByTagName("span")[currentImgNum - 1].removeAttribute("class");
        document.getElementsByTagName("span")[currentImgNum].setAttribute("class", "on");
    }
    switch (currentImgNum) {
        case "1":
            wrap.style.left = "-1200px";
            break;
        case "2":
            wrap.style.left = "-1800px";
            break;
        case "3":
            wrap.style.left = "-2400px";
            break;
        case "4":
            wrap.style.left = "-3000px";
            break;
        case "5":
            wrap.style.left = "-600px";
            document.getElementsByTagName("span")[4].removeAttribute("class");
            document.getElementsByTagName("span")[0].setAttribute("class", "on");
            break;
    }
};
/*********************************************end*************************************/


/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
document.getElementsByClassName("arrow arrow_left")[0].onclick = function () {
    currentImgNum = document.getElementsByClassName("on")[0].innerText;
    if (currentImgNum !== "1"){
        document.getElementsByTagName("span")[currentImgNum - 1].removeAttribute("class");
        document.getElementsByTagName("span")[currentImgNum - 2].setAttribute("class", "on");
    }
    switch (currentImgNum) {
        case "1":
            wrap.style.left = "-3000px";
            document.getElementsByTagName("span")[0].removeAttribute("class");
            document.getElementsByTagName("span")[4].setAttribute("class", "on");
            break;
        case "2":
            wrap.style.left = "-600px";
            break;
        case "3":
            wrap.style.left = "-1200px";
            break;
        case "4":
            wrap.style.left = "-1800px";
            break;
        case "5":
            wrap.style.left = "-2400px";
            break;
    }
};
document.getElementsByClassName("arrow arrow_right")[0].onclick = nextImg;
/*********************************************end*************************************/


/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
function auto() {
    window.clearInterval(timer);
    timer = window.setInterval(nextImg, 2000);
    container.onmouseenter = function () {
        clearInterval(timer);
    };
    container.onmouseleave = function () {
        auto();
    };
}
auto();
/*********************************************end*************************************/


/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/
for (let i = 0; i < 5; i++) {
    document.getElementsByTagName("span")[i].onclick = function () {
        currentImgNum = document.getElementsByClassName("on")[0].innerText;
        document.getElementsByTagName("span")[currentImgNum - 1].removeAttribute("class");
        document.getElementsByTagName("span")[i].setAttribute("class", "on");
        wrap.style.left = "-" + 600 * (i + 1) + "px";
    };
}
/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/
function a() {
    for (let i = 0; i < document.getElementsByTagName("td").length; i++) {
        let td = document.getElementsByTagName("td")[i];
        let index = td.cellIndex;
        td.onclick = function () {
            let clicked = document.getElementsByTagName("td")[i];
            let parentNode = clicked.parentNode;
            let content = clicked.innerText;
            parentNode.removeChild(clicked);
            for (let j = 0 ; j < parentNode.childNodes.length ; j++){
                if (parentNode.childNodes[j].nodeType === 3 && /^\s+$/.test(parentNode.childNodes[j].nodeValue)){
                    parentNode.removeChild(parentNode.childNodes[j]);
                }
            }
            parentNode.insertBefore(document.createElement("input"), parentNode.childNodes[index]);
            document.getElementsByTagName("input")[0].value = content;
            let input = document.getElementsByTagName("input")[0];
            input.focus();
            input.setSelectionRange(0, 0);
            input.onblur = function () {
                let blur = input;
                let parentNode = blur.parentNode;
                let content = blur.value;
                parentNode.removeChild(blur);
                parentNode.insertBefore(document.createElement("td"), parentNode.childNodes[index]);
                document.getElementsByTagName("td")[i].innerText = content;
                a();
            };
        };
    }
}
a();
/*********************************************end*************************************/