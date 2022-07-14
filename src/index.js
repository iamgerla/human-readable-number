module.exports = function toReadable (number) {
  let n1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
 let n2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 let string;
 let string2;
if(number==0){return 'zero';}
if(number<20){ return n1[number]; }
if(number>19 && number<100 && number%10==0){return n2[Math.floor(number/10)];}
if(number<100 && number%10!=0){return n2[Math.floor(number/10)]+" "+n1[number%10];}

if(number>=100 && number%100==0){return n1[Math.floor(number/100)]+" "+"hundred";}
let del=number-(number-(number%100));
if(number>100 && del<20){
    return n1[Math.floor(number/100)]+" "+"hundred"+" "+n1[number%100];}
if(number>100 && number%10==0){
    string=n1[Math.floor(number/100)]+" "+"hundred";
    number%=100;
    return string+" "+n2[Math.floor(number/10)];}
else{
string=n1[Math.floor(number/100)]+" "+"hundred";
string2=n1[number%10];
    number%=100;
    return string+" "+n2[Math.floor(number/10)]+" "+string2;
}
}
