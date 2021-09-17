let date=new Date();
let current_date=date.getDay();
let dayOfWeek='';
switch (current_date) {
    case 0:
        dayOfWeek="Sunday";
        
        
        break;
    case 1:
        dayOfWeek="Monday";
        break;
    case 2:
        dayOfWeek="Tuesday";
        break;    
    case 3:
        dayOfWeek="Wednesday"
        break;

    case 4:
        dayOfWeek="Thursday";
        break;
    case 5:
        dayOfWeek="Friday";
        break;
    case 6:
        dayOfWeek="Saturday";
        break;

    
}
alert(`Hello , it's ${dayOfWeek} today`);