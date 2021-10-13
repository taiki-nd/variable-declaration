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
