
//sum(a~b)を計算する関数
function sum(a: number, b: number): number {
  let sum: number = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

//pay pattern関数
function payPattern(): number {
    let counter: number = 0;
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 5; j++) {
            for (let k = 0; k <= 1; k++) {
                if (i * 1000 + j * 500 + k * 100 === 2000) {
                    counter++;
                }
            }
        }
    }

    return counter;
}