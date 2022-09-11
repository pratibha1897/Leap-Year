// //With one line code

// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// var year = prompt(parseInt("Enter year : "));
// leapYear(year);




// With multiple lines of code

function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                document.write ('Leap year.');
            }
            else{
                document.write ('Not a leap year.');
            }
        }
        else{
            document.write ('Leap year.');
        }
    }
    else{
        document.write ('Not a leap year.');
    }
}
var year = parseInt(prompt("Enter year : "));
isLeapYear(year);