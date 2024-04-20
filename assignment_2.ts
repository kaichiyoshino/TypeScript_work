//閏年を判定するプログラム
function isLeapYear(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

//min関数
function min(a: number, b: number): number {
  if (a < b) {
    return a;
  }
  return b;
}

//max関数
function max(a: number, b: number): number {
  if (a > b) {
    return a;
  }
  return b;
}

//median関数
function median(a: number, b: number, c: number): number {
  if (a === b || a === c || b === c) {
    return a;
  }
  return a + b + c - min(a, min(b, c)) - max(a, max(b, c));
}
