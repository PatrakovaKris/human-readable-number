module.exports = function toReadable (number) {
  
    var numbers={
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    var num= number;
    str='';

    if(num===0) str += numbers[num];

    if(num>=100){
        str += numbers[Math.floor(num/100)] + ' ' +numbers[100];
		
		if (num%100!=0){
            str += ' ';
			num = num%100;
        }
        

    }

    if(num>20 && num<100){
        str += numbers[Math.floor(num/10)+'0'];

        if (num%10!=0){
            str += ' '+numbers[num%10];
        }

    }

    if(num>0 && num<=20){
        str += numbers[num];
    }

    return str;

}
