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

    //　複数の型の両方の属性を持つことを表現した場合
    type Twitter = {
        twitterId: string;
    }
    type Instagram = {
        instagramId: string;
    }

    type SocialIds = Twitter & Instagram;

    const myIds: SocialIds = {
        twitterId: "hoge",// どちらかだけだとコンパイルエラーになる。
        instagramId: "piyo",
    }

    // |(パイプ)でつなぐと、どちらかの型という意味になる
    type singleId = Twitter | Instagram;
    const mySyngleId = {
        twitterId: "hoge"
        //instagramId: "piyo" 両方書くとコンパイルエラーになる。
    }

    // 型ガード: 型の判定を行うことで、後続の処理を型安全にするもの。(ここは公式のガイドも参照：https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)
    function padLeft(padding: number | string, input: string): string {
        // return " ".repeat(padding) + input; paddingは「number | string 」型なので、number型には入れることができない！
        if (typeof padding === "number") {// この型ガードが入ることによって、if文内のpaddingはnumber型であることが保証される
            return " ".repeat(padding) + input;// 従って、ここではpaddingがnumber型となり、引数に指定できる
        }
        return padding + input;// 型ガードがあることによって、if文以降のpaddingはstring型であることが保証される
    }

    //　上記の typeof 以外にも、 instanceof や in での判定も型ガードとして使える
    // 一応キャスト(型アサーション)もあるが今はあまり気にしないようにしよう


    // keyof オブジェクトのキーの文字列のみを許容する動的な型宣言
    type Park = {
        name: string;
        hasTako: boolean;
    }

    type Key = keyof Park;
    const myKey: Key = "name";
    //const myKey2: Key = "hoge"; これはコンパイルエラーになる。"name" or "hasTako" のみを許容するため。
    const myOneLineKey: keyof Park = "hasTako";// 上記は1行でもかける




}
