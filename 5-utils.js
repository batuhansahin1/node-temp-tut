// module.exports.sayHi = function (name) {
//   console.log(`Hi ${name}`);
// };
const sayHi = function (name) {
  console.log(`Hi ${name}`);
};
// alternatif yolla export istersen yine destructuring yapmak zorundasın
// export default sayHi
module.exports = sayHi;
//bu şekilde yaparsan destructuringe gerek yok
