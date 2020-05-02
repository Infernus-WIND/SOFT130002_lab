/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

let i = 1;
let num = 1025;
console.log(i);
let timer = window.setInterval(timeTest(), 5000);
function timeTest(){
    let count = 0;
    return function() {
        i = i * 2;
        if (count === 10){
            num = i;
            console.log("count has reached 10.");
            window.clearInterval(timer);
        } else if ((new Date()).getSeconds() <= 4){
            num = i;
            window.clearInterval(timer);
            console.log("time has reached a new minute.");
        }
        if (num > i){
            console.log(i);
            return (++count);
        }
    }
}

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
let tel = 13891873360;
let email = "19302010017@fudan.edu.cn";
function testMail(telephone,mail) {
    let re1 = /[1][0-9]{10}/;
    let re2 = /^[A-Za-z0-9._]+@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,6})$/;
    let judgeTel = re1.test(telephone);
    let judgeMail = re2.test(mail);
    return [judgeTel,judgeMail];
}
if (testMail(tel,email)[0]){
    if (testMail(tel,email)[1]){
        console.log("The telephone is right and the mail is right!");
    } else {
        console.log("The telephone is right and the mail is wrong!");
    }
} else{
    if (testMail(tel,email)[1]){
        console.log("The telephone is wrong and the mail is right!");
    } else {
        console.log("The telephone is wrong and the mail is wrong!");
    }
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
let result = new Set();
function testRedundancy(str) {
    let re = /\b([a-z]+) \1\b/ig;
    let strSplit = str.split(" ");
    let words;
    for (let i = 0 ; i < strSplit.length - 1 ; i++){
        let judge = strSplit[i] + " " + strSplit[i+1];
        words = judge.match(re);
        if (words != null){
            result.add(words);
        }
    }
}
testRedundancy("Is is the iS is cost of of gasoline going up up");
let final3 = "Set { ";
if (result.size <= 10){
    for (let x of result){
        final3 = final3 + "'" + x + "', ";
    }
} else{
    result = Array.from(result).sort();
    for (let i = 0 ; i < 10 ; i++){
        final3 = final3 + "'" + result[i] + "', ";
    }
}
final3 = final3.substring(0 , final3.length - 2);
final3 = final3 + "}";
console.log(final3);

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
let set1 = new Set();
function testKeyBoard(wantInput, actualInput) {
    let count = 0;
    let want = wantInput.split("");
    let actual = actualInput.split("");
    for (let i = 0 ; i < want.length ; i++){
        if (want[i] !== actual[i - count]){
            count++;
            set1.add(want[i].toUpperCase());
        }
    }
}
testKeyBoard("7_This_is_a_test","_hs_s_a_es");
console.log(set1);

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
let words5,words5reverse,words5backup,count5 = 0;
function testSpecialReverse(str) {
    words5 = str.split(" ");
    words5backup = str.split(" ");
    words5reverse = words5;
    for (let i = 0 ; i < words5.length ; i++){
        words5reverse[words5.length - i - 1] = words5backup[i];
    }
}
testSpecialReverse("  hello  world!  ");
let result5 = "";
for (let i = 0 ; i < words5reverse.length ; i++){
    if (words5reverse[i] !== ""){
        result5 += words5reverse[i] + " ";
    }
}
console.log(result5);

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/
let map6 = new Map();
let result6 = [];
let count6 = 0;
function twoSum(nums, target) {
    for (let i = 0 ; i < nums.length ; i++){
        map6.set(nums[i],i);
        let mark2 = map6.get(target - nums[i]);
        if (mark2 !== undefined) {
            result6[count6] = [mark2,i];
            count6++;
        }
    }
}
twoSum([1,2,3,4],5);
for (let i = 0 ; i < result6.length ; i++){
    console.log(result6[i]);
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
let map7 = new Map();
function lengthOfLongestSubstring(str) {
    let char7 = str.split("");
    for (let i = 0 ; i < char7.length ; i++){
        map7.set(char7[i],i);
    }
}
lengthOfLongestSubstring("abbbbb");
console.log(map7.size);
/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry(){
    Country.call(this);
}
DevelopingCountry.prototype.sayHi = function(){
  console.log("Hi,i am a developing country.")
};
let developing = new DevelopingCountry();
developing.sayHi();

function  PoorCountry() {

}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};
let poor = new PoorCountry();
poor.saySad();

let developed = Object.create(new Country());
developed.sayHappy = function(){
    console.log("I am a Happy developed country.");
};
developed.sayHappy();
