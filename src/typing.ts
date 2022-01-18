// どちらかが入るといった「Union Type」という型も作る
const typing = () => {
    let numberType: number;
    // numberType = "hoge";これはコンパイルエラー

    let birthYear: number | string;
    //birthYear = [1,2];これはコンパイルエラー

    let favoriteFood: "北極" | "冷やし味噌"
    // favoriteFood = "hoge";これはコンパイルエラーになる。 Javaでいうとenumみたいなイメージか

    // any : 何でもOK型
    let opt: any;
    opt = 1;
    opt = "hoge";
    opt = [1, 2];
    opt = { hoge: 12, fuga: "fuga" };

    // unnown : 
    // 省略.

    // オリジナル型も作れる
    type BirthYear = number | string;
    type Menu = "北極" | "冷やし中華";
    function orderFood(food: Menu) {
        console.log(food);
    }
    orderFood("北極");
    orderFood("冷やし中華");
    //orderFood("hoge"); これはコンパイルエラーになる

    // 
    type Person = {
        name: string;
        age: number;
        favoriteBank: string;
    }

    function callName(person: Person) {
        console.log(person.name);
    }
    const suzuki: Person = {
        name: "suzuki",
        age: 19,
        favoriteBank: "mizuho",
    }
    const inu = {
        name: "pochi",
        age: 2,
        favoriteFood: "chool",
    }
    callName(suzuki);
    // callName(inu); これはコンパイルエラーになる


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