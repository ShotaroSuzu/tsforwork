const functionPractise = () => {
    // 関数の型定義
    let fun: (arg1: string) => boolean;

    fun = (name: string) => {
        //return name.toUpperCase();返値がstringなのでコンパイルエラーになる
        return name.startsWith("a");
    }

    // ソートする場合の関数の型定義で使われたりする
    let mySort: (list: string[], conv: (value: string) => string) => string[];
    mySort = (list, conv) => {
        const entries = a.map((value) => [value, conv(value)])
        entries.sort((a, b) => {
            if (a[1] > b[1]) {
                return 1;
            } else if (a[1] < b[1]) {
                return -1;
            }
            return 0;
        });
        return entries.map(entry => entry[0]);

    }

    const a: string[] = ["a", "B", "D", "c"];
    console.log(mySort(a, s => s.toLowerCase()))
    // ["a", "B", "c", "D"]

    // デフォルト引数
    // デフォルト値を宣言できる。undefinedやnullとかも指定できるが、?は一緒に使えない
    function func(name: string = "小動物", favorite: string | undefined | null = "小豆餅") {
        console.log(`${name}は${favorite}が好きです`);
    }
    func();//省略して呼べるし、呼んだ場合はデフォルト引数の値が入る

    // 分割代入のような形も可能
    // ただし、その場合後ろでまとめて型宣言をする必要がある。(型宣言をしない場合は、こんな感じで書く必要がある{ myName = "小動物", favorite = "ずんだ餅" }= { })
    const funcSpread = ({ myName = "小動物", favorite = "ずんだ餅" }: { myName: string, favorite: string }): void => {
        console.log(`${myName}は${favorite}が好きです`);
    }

    // 関数を含むオブジェクトの定義方法。クラスを使うまでもない時
    const smallAnimal = {
        getName() { // 名前付き関数を定義するとそのままその属性になる。functionは省略できる
            return "小動物"
        },
        _favorite: "小笠原",
        get favorite() {// getter/setter専用の宣言方法。
            return this._favorite;
        },
        set favorite(favorite) {
            this._favorite = favorite;
        },
        hogefunction(arg) {
            return "hoge";
        }
    }

    // 現在ではなるべくthisは使わないようなコードがかけるので(アロー関数で書く)、今は省略

    // 引数のセットを配列で渡したいとき
    //昔の書き方
    const f = (a, b, c) => {
        console.log(a, b, c);
    }
    const params = [1, 2, 3];
    f.apply(null, params);

    //今はスプレッド構文があるので以下のようにかける(はずがなぜかコンパイルエラーになるな。。。)
    // f(...params);

    //残余引数という書き方もある。これは、関数の型定義の時に、引数に指定されたものの残りをまとめて配列(オブジェクト)で扱うことができるというもの
    //配列の例
    const f2 = (a, b, ...c) => {
        console.log(a, b, ...c);
    }
    f2(1, 2, 3, 4, 5, 6,);

    //オブジェクトの例（これでイケるきがするがなぜ。。。）
    const f3 = ({ name, ...rest }) => {
        console.log(name);
        console.log(rest);
    };

    f3({ name: "suzu", age: 30, job: "writer" });

    // 即時実行関数はwebpackなどのツールを導入していれば使うことはないだろう。
    // ただし、レガシーなコードではまだまだ現役
    var lib = (function () {
        //ここにコードを書いて、その中身のスコープを限定する
    })();

}
