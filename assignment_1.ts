//example1
//Person型を定義する
interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
}

//オブジェクトを作成し、Person型を割り当てる
const person1: Person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

//example2
//Type文による型定義
type User = {
  email: string;
  password: string;
};

//オブジェクトを作成し、User型を割り当てる
const test_user: User = {
  email: "7300000@ed.tus.ac.jp",
  password: "testpass",
};
