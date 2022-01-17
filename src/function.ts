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


}
