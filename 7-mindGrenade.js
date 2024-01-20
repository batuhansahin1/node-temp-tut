const num1 = 5;
const num2 = 44;
const addValues = function () {
  console.log(`the sum is : ${num1 + num2}`);
};
addValues();

//biz bunu export etmiyoruz node bunu fonksiyon içine alıp export ettiği için kodumuz çalışıyor.Yani num1 ve num2 de fonksiyon içinde ama addValuesin bir üst fonksiyonunun içinde
/* function(){
    const num1 = 5;
    const num2 = 44;
    const addValues = function () {
      console.log(`the sum is : ${num1 + num2}`);
    };
    addValues();  
} gibi bir de fonksiyonu başlatmış olmamız lazım çünkü  diğer türlü fonk tanımlaması olarak kalır.Bu fonksiyonu sanki app.js içinde tanımlamışsın gibi düşün.Olayın işleyişi şu şekilde biz bunları export etmediğimiz için node bunların hepsini bir fonksiyonmuş gibi abul edip export ediyo.Require methodunu kullandığımız için yani bütün kodu çalıştırıyor invoked Bu olay aslında dışarıdan module import ediyosun gibi sadece onu değişkene atamayıp direkt çağırdık*/
