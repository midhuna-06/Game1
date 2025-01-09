var randomNum=Math.floor(Math.random()*100)+1;
var attempt = 0;

document.getElementById('button').addEventListener('click',function(){

    var guess =parseInt(document.getElementById('Guessinput').value);
    attempt++;
    if(guess==randomNum){
        display("Congrats!!You have found in "+attempt+" attempts");
       
    }

    else if(guess<randomNum){
        display("Your number is low!!Try a higher number");
    }
    else{
        display("Your number is high!!Try a lower number");
    }

});

function display(message){
    document.getElementById('message').textContent=message;
}

