/* Date型はあるものの、結構使い勝手が悪いので、基本的には以下のライブラリを使う
- Luxon
- DynamicsCompressorNode.js
- date-funs
- js-Joda 
*/


// まずは基本のDate型
// タイムゾーンを含んだ日付ができる
const now = new Date();
console.log(now);

// new を付けないと文字列としてかえって来る
const nowStr = Date();
console.log(typeof nowStr);// string

// ミリ秒単位のエポック時刻取得
const epoc = Date.now();
console.log(epoc);

// Dateインスタンスからエポック時刻を取得するには、valueOf()を使う
console.log(now.valueOf());

// 特定の日付のインスタンスの作成
const certainDate = new Date(2021, 8, 21, 21, 10, 5);// 2021/9/21 21:10:05 月に関しては、1月が0スタートなので注意！！
console.log(certainDate.valueOf());

// UTCの時刻から生成したい場合は、Date.UTC()を使う
const utcEpoc = Date.UTC(2020, 8, 21, 11, 10, 5);// UTCのエポック実行を返す
console.log(utcEpoc);
const utcDate = new Date(Date.UTC(2020, 8, 21, 11, 10, 5));// new Date(number)でエポック時刻を受け取って時間を持つDateを返す
console.log(utcDate);

// 次回はDay.js
