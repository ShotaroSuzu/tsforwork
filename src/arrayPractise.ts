const smalls = [
    "小動物",
    "小型車",
    "小論文"
];

const [smallAnimal, smallCar] = smalls;

console.log('const [smallAnimal, smallCar] = smalls; によって、 smallAnimal:　' + smallAnimal + ', smallCar: ' + smallCar + ' となる');

const [, ...other] = smalls;

console.log('const [, ...other] = smalls; によって other の先頭除いた以降の値がとれる other: ' + other);

//読み込み専用にするには型の前にreadonlyを付ける
const list: readonly number[] = [1, 2, 3];

// 値やリテラルに付ける場合は型指定をしない場合は as const
// このような書き方はできない
// const list2: number[] = [1,2,3] as const;
const list2 = [1, 2, 3] as const;

