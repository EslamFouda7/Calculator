const scren = document.getElementById('scren');
//show numbers on screen
function show(input){
    scren.value += input;
}

//btn clear the screen
function remove(){
    scren.value="";
}

//btn clac the result
function calc(){
    try{
        scren.value = eval(scren.value);
    }
    catch(a){
        scren.value = "Error";
    }
    
}