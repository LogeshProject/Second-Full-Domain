var numberToWords = function(num) {

    let str = num.toString()

    str = str.split('').reverse().join('');

    num = new Number(str)
    
    const ones = {
        0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
        6: 'Six', 7: 'Seven', 8: 'Eight',9: 'Nine'
    };

    const tens = {
        1: 'Ten' ,  2: 'Twenty', 3: 'Thirty',
        4: 'Forty', 5: 'Fifty', 6: 'Sixty', 7: 'Seventy', 8: 'Eighty', 9: 'Ninety' 
    }

    const hundreds = {
        1 : 'One Hundred' , 2 : 'Two hundred', 3 : 'Three hundred' , 4 : 'Four hundred',5 : 'Five hundred' , 6 : 'Six hundred' , 7 : 'Seven hundred' , 8 : 'Eight hundred' , 9 : 'Nine hundred'
    }

    const thousands = {
        1 : 'One Thousand' , 2 : 'Two Thousand' , 3 : 'Three Thousand' , 4 : 'Four Thousand',5 : 'Five Thousand', 6 : 'Six Thousand' , 7 : 'Seven Thousand' , 8 : 'Eight Thousand' , 9 : 'Nine Thousand'
    }

    let res = '' ;
    let count = 0 ;

    while(num > 0){

        let rem = num % 10 ;

        if(count === 0) res = res +  thousands[rem] + ' '
            
        if(count === 1) res = res +  hundreds[rem] + ' '
            
        if(count === 2) res = res +  tens[rem] + ' '
            
        if(count === 3) res += ones[rem]


        num = Math.floor(num / 10);
        count++ ;
        console.log(num)
    }
    
    return res ;

};

let num = 9999

console.log(numberToWords(num))