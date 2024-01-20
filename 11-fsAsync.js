const { readFile, writeFile, readFileSync } = require("fs");

//async fonksiyon olduğu için fonksiyon tamamlandığında çalışacak fonksiyonu parametre olarak callback fonksiyonunu yazıyor tıpkı diğer asenkron işlemlerde yaptığımız gibi.Callback fonksiyonları, asenkron işlemlerin yönetilmesinde önemli bir rol oynar. Bu fonksiyonlar, bir işlemin tamamlandığında çağrılacak ve işlemin sonucunu veya durumunu işlemek için kullanılacaktır.Özetle, callback fonksiyonları, asenkron programlamanın temel taşlarından biridir ve asenkron işlemlerin kontrolünü, yönetimini ve sonuçlarını ele almak için kullanılır.
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
// setInterval(() => {
//   writeFile(
//     "./content/first.txt",
//     "Bakalim bunu okuyabilecek misin abi",
//     { flag: "a" },
//     (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       } else {
//         readFile("./content/first.txt", "utf8", (err, result) => {
//           if (err) {
//             console.log(err);
//             return;
//           } else {
//             console.log(result);
//           }
//         });
//       }
//     }
//   );
// }, 2000);
