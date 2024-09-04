var english = +prompt("insert your english marks");
var math = +prompt("insert your math marks");
var chemistry = +prompt("insert your chemistry marks");
var physics = +prompt("insert your physics marks");
var urdu = +prompt("insert your urdu marks");

var calculateMarks = english + math + chemistry + physics + urdu;
var percentage = (calculateMarks *100)/500;

if(calculateMarks >= 450 && calculateMarks  == 500){
    alert(calculateMarks + " grade A+")
}
else if (calculateMarks >= 400 && calculateMarks < 450){
    alert(calculateMarks + " grade A")
}
else if(calculateMarks >= 350 && calculateMarks < 400){
    alert(calculateMarks + " grade B")
}
else if (calculateMarks >= 300 && calculateMarks < 350){
    alert(calculateMarks + " grade C")
} 
else if(calculateMarks >= 250 && calculateMarks < 300){
    alert(calculateMarks + " grade D")
}
else{
    alert("Faild")
}



    
