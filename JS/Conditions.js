function num(){
    number = parseInt(document.getElementById("numjs").value);

    if (number > 0){
        alert("The " +number+ " is positive");
    }
    else if(number == 0){
        alert("The "+ number +" is neutral");
    }
    else{
        alert("The "+ number + " is negative");
    }
}