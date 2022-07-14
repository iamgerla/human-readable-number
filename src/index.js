module.exports = function toReadable (number) {
 let n1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
 let n2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 let string;
    if(number==0){return 'zero';}
    if(number<20){ return n1[number]; } 
    if(number>100 && number<120){ return n1[Math.floor(number/100)]+" "+"hundred"+" "+n1[number%100]; } 
    if(number>119 && number%10==0){number/=10; return n1[Math.floor(number/10)]+" "+"hundred"+" "+n2[number%10];}
    else{
        string=n1[Math.floor(number/100)]+" "+"hundred";
        number%=100;
        return string+" "+n2[Math.floor(number/10)]+" "+n1[number%10];
        }
}
