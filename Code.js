const calc = {
    v : "1",
    Name : "H15h4y",
    CalcA : function () {
        let num1 = prompt('Enter Nummber ');
        let num2 = prompt('Enter Nummber 2 ');
        let math = prompt('Enter Math (- + * / )');
        let math1 = '+'; 
        let math2 = '-';
        let math3 = '*';
        let math4 = '/';
        if(math === math1){ 
            alert(num1 + num2);
        }
        if(math === math2){
            alert(num1 - num2);
        }if(math === math3){
            alert(num1 * num2);
        }if(math === math4){
            alert(num1 / num2);
        };
    }
};
console.log(calc.CalcA());



//You Can edit code
//by mohmed ayoub Facebook 
// : !!==== https://www.facebook.com/profile.php?id=100083848238871) ====!!
