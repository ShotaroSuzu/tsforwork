const objectPractise = () => {

    const key = 'favorite drink';

    const smallAnimal = {
        name: "小動物",
        favorite: "小籠包",
        'home town': "神奈川県警のいるところ",
        [key]: "ストロングゼロ"
    };
    console.log(smallAnimal.name);
    console.log(smallAnimal[key]);

    //JSON
    const json = JSON.stringify(smallAnimal, null, 4)
    console.log(json);

    const smallAnimal2 = JSON.parse(json);

    // オブジェクトの値の取り出し
    console.log(smallAnimal.favorite);

    //まとめて取り出し
    const { name, favorite, } = smallAnimal;
    console.log(name);
    console.log(favorite);

    // オブジェクトのコピー
    const copied = { ...smallAnimal };
    console.log(copied);
    console.log(copied === smallAnimal);// falseを返す

    // オブジェクトのマージ
    const animalAge = { age: 15 };
    const merged = { ...smallAnimal, ...animalAge }
    console.log(merged);

    //オブジェクトもJavaのMapインターフェースと同じような構造だが、振る舞いを持つオブジェクトとしては、
    //JSでもMapを使う。その方が型チェックをかけられるので。
    const map = new Map<string, string>([["五反田", "約束の地"], ["戸越銀座", "とごっしー"]]);
    for (const [key, value] of map) {
        console.log(`key: ${key}, value= ${value}`);
    }

    //読み込み専用オブジェクト
    type User = {
        name: string;
        age: number;
    }
    const u: Readonly<User> = { name: "shibuyawa", age: 38 };
    //u.age = 23; これはコンパイルエラーになる

    const u2 = { name: "shibukawa", age: 29 } as const;
    //u2.age = 24; これも同様。

    //読み込み専用属性
    type Person = {
        name: string;
        readonly favoriteBank: string;// 読み込み専用属性
        favoriteGyudon?: string;// 省略可能な属性
    }

    const p: Person = {
        name: "suzuki",
        favoriteBank: "UFJ",
        // favoriteGyudon: "Y" なくてもOK
    }
    //p.favoriteBank = "hoge" これはコンパイルエラーになる。



}
