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
