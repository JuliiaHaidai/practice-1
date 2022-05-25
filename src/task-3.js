
// export default function sumDigits(n) {
//     let sum = 0;
//     let a = String(n);
//     for (let i = 0; i < a.length; i++){
//       sum += Number(a[i])
//     }
//     return sum;
//   }
  //console.log(sumDigits(1234))
export default function sumDigits(n) {
    return Array.from(String(n), x => Number(x)).reduce((a, b) => a + b);
}