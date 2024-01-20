const _ = require("lodash");
//lodash'in  http,fs,os node paketlerinen farkı dışarıdan kendimiz yüklüyor olmamız(external library) yani bu dosyayı eğer yüklemezsek burada lodash(external library) ile ilgili hiçbir işlem yapamayız ama http ,fs,os gibi modüllerle  ilgili işlem yapabiliyoruz

const items = [1, [2, [3, [4]]]];
console.log(items);
const newItems = _.flattenDeep(items);

console.log(newItems);
