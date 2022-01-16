const arrayPractise = () => {

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

    const places = ["小岩駅", "小浜市", "小倉駅"];
    if (places.includes("小渕駅")) {
        console.log("小渕駅はあります")
    } else {
        console.log("小渕駅はありません")
    }

    // ソート
    // デフォルトのソートは以下のとおりで直感的ではないため、適宜実装する必要がある。
    // 既定のソート順は昇順で、要素を文字列に変換してから、UTF-16 コード単位の値の並びとして比較します。
    const numbers = [30, 1, 200]
    //numbers.sort();

    numbers.sort((a, b) => a - b);


    const stations = [
        { name: "池袋", users: 558623 },
        { name: "新宿", users: 775386 },
        { name: "渋谷", users: 366128 },
        { name: "東京", users: 462589 }
    ];

    stations.sort((a, b) => a.users - b.users);

    // 2項目でソートする場合は重み付けをした上で加算することでソートできる
    const stations2 = [
        { name: "大手町", lines: 5, yomi: "おおてまち" },
        { name: "飯田橋", lines: 7, yomi: "いいだばし" },
        { name: "永田町", lines: 5, yomi: "ながたちょう" },
    ];

    const compByLineNum = (a: number, b: number): number => {
        return (a < b) ? -1 : (a === b) ? 0 : 1;
    };

    const compByYomi = (a: string, b: string): number => {
        return (a < b) ? -1 : (a === b) ? 0 : 1;
    };

    stations2.sort((a, b): number => {
        const lineScore = compByLineNum(a.lines, b.lines);
        const yomiScore = compByYomi(a.yomi, b.yomi);
        return lineScore * 10 + yomiScore;
    });

    // ループ
    let iterable = ["小金井", "小淵沢", "小矢部"];
    for (let index = 0; index < iterable.length; index++) {
        const element = iterable[index];
        console.log(iterable[index]);
    }

    iterable.forEach(e => {
        console.log(e);
    });

    for (const value of iterable) {
        console.log(value);
    }

    for (const [i, value] of iterable.entries()) {
        console.log("index : " + i + ": value = " + value);
    }

};