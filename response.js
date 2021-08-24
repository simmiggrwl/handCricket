var startbtn=document.querySelector(".userbuttonsbat");
var startbtn1=document.querySelector(".userbuttonsbowl");
var resetbtn=document.querySelector("#reset");
var endbtn=document.querySelector("#end");
const userscorecount = document.querySelector('#userscore');
const compscore = document.querySelector('#compscore');
var usernumber=0;
var scorecount=0;
var computerscorecount=0;
var compnumber=0;

function getcomputernumber(){
    compnumber=Math.floor(Math.random() * 10) + 1;
    console.log(compnumber);
}

function start(){
    startbtn1.style.display = "none";
    compnumber=Math.floor(Math.random() * 10) + 1;
    console.log(compnumber);
}

function incrementuserscore(){
    scorecount+=usernumber;
    userscorecount.textContent=`User Score: ${scorecount}`;
}

function incrementcomputerscore(){
    computerscorecount+=compnumber;
    compscore.textContent=`Computer Score: ${computerscorecount}`;
}

function getusernumber(buttonclass){
    console.log(buttonclass);
    var number = parseInt(buttonclass.split('').slice(1).join(''));
    console.log(number);
    usernumber=number;
    userscore();
}

function getusernumberbowl(buttonclass){
    console.log(buttonclass);
    var number = parseInt(buttonclass.split('').slice(1).join(''));
    console.log(number);
    usernumber=number;
    computerscore();
}

function userscore(){
    if(usernumber!=compnumber){
        incrementuserscore();
        getcomputernumber();
    }
    else{
        alert(`The computer number was also ${compnumber}. Your chance to bowl.`);
        startbtn.style.display = "none";
        startbtn1.style.display="initial";
        getcomputernumber();
    }
}

function computerscore(){
    if(usernumber!=compnumber){
        incrementcomputerscore();
        getcomputernumber();
    }
    else{
        alert(`The user number was also ${usernumber}. Game over. User Score=${scorecount} Computer Score=${computerscorecount}`);
        location=location;
    }
}

startbtn.addEventListener('click', (e) => {
    startbtn1.style.display = "none";
    getusernumber(e.target.className);
});

resetbtn.addEventListener('click', (e) =>{
    location=location;
})

endbtn.addEventListener('click', (e)=>{
    alert(`You got ${scorecount} out of ${nooftry} right!`)
    location=location;
})

startbtn1.addEventListener('click', (e) => {
    getusernumberbowl(e.target.className);
})