/**
 * const, let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能

val1 = "var変数の上書き";
console.log(val1);

// var変数の再宣言
var val1 = "var変数の再宣言";
console.log(val1);

//-----------------------------

let val2 = "let変数";
console.log(val2);

// letは上書き可能

val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可
//let val2 = "let変数の再宣言";

//------------------------------

const val3 = "const変数";
console.log(val3);

// consr変数は上書き不可
//val3 = "constの上書き"

// const変数は再宣言不可
//const val3 = "const変数の再宣言"

const val4 = {
  name: "kii",
  age: "27"
};
//console.log(val4)

val4.name = "きぃ";
//console.log(val4)

val4.address = "yokohama";
console.log(val4);

//-----------------------------

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * ほとんどがconstでやる。
 */

/**
 * テンプレート文字列
 */

const name = "きぃ";
const age = "27";

//　「私の名前はきぃで２７歳です」
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

// テンプレと文字列を用いると
const message2 = `私の名前は${name}で、年齢は${age}歳です。`;
console.log(message2);

//------------------------------------------------------

/**
 * アロー関数
 */

//  function func1(str) {
//   return str;
//  }
//  console.log(func1("func1です"));

const func1 = function (str) {
  return str;
};

console.log(func1("func1です１"));

//アロー関数の場合

const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));

//------------------------------------

/**
 * 分割代入
 */

const myProfile = {
  myname: "きぃ",
  myage: "27"
};

const message3 = `名前は${myProfile.myname}で、年齢は${myProfile.myage}歳です。`;
console.log(message3);

const { myname, myage } = myProfile;
const message4 = `名前は${myname}で、年齢は${myage}歳です。`;
console.log(message4);

const herProfile = ["eri", 34];
const message5 = `名前は${herProfile[0]}、で年齢は${herProfile[1]}歳です`;
console.log(message5);

const [hername, herage] = herProfile;
const message6 = `名前は${hername}、で年齢は${herage}歳です`;
console.log(message6);

/**
 * デフォルト値
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello("kii");
sayHello();

/**
 * スプレッド構文
 */
//　配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => {
  return console.log(num1 + num2);
};
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//　まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
arr6[0] = 100;
console.log(arr6);
console.log(arr4); //元にも影響が出ない

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
//console.log(arr8)
//arr8[0] = 100;
console.log(arr8);
console.log(arr4); //元にも影響が出てしまう
