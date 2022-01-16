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

}