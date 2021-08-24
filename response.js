var startbtn=document.querySelector(".userbuttons");
var resetbtn=document.querySelector("#reset");
const score = document.querySelector('#score');
const trycounter = document.querySelector('#try');
var usernumber=0;
var scorecount=0;
var nooftry=0;
var compnumber=0;

function getcomputernumber(){
    compnumber=Math.floor(Math.random() * 10) + 1;
    console.log(compnumber);
}



function incrementscore(){
    scorecount+=1;
    score.textContent=`Score: ${scorecount}`;
}

function incrementtrial(){
    nooftry+=1;
    trycounter.textContent=`No of tries: ${nooftry}`;
}

function getusernumber(buttonclass){
    console.log(buttonclass);

    var number = parseInt(buttonclass.split('').slice(1).join(''));
    console.log(number);
    usernumber=number;
    checkwin();
}

function checkwin(){
    if(usernumber==compnumber){
        alert("You win!");
        incrementscore();
        incrementtrial();
        getcomputernumber();
    }
    else{
        alert(`The computer number was ${compnumber}. You lost. Please try again.`);
        incrementtrial();
        getcomputernumber();
    }
}

startbtn.addEventListener('click', (e) => {
    getusernumber(e.target.className);
    
});

resetbtn.addEventListener('click', (e) =>{
    location=location;
})