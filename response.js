var startbtn=document.querySelector(".userbuttonsbat");
var a=document.querySelector(".a");
var startbtn1=document.querySelector(".userbuttonsbowl");
var resetbtn=document.querySelector("#reset");
var batsmanheading=document.querySelector('#batsman');
var bowlsmanheading=document.querySelector('#bowlsman');
var endbtn=document.querySelector("#end");
var tablebatting=document.querySelector(".userbatting");
var tablebowling=document.querySelector(".userbowling");
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
    a.style.display = "none";
    a.style.display="none";
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
        var row = tablebatting.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        //cell1.innerHTML = `${usernumber}`;
        cell1.innerHTML=`<img src='${usernumber}.png' />`;
        cell2.innerHTML = `<img src='${compnumber}.png' />`; 
        incrementuserscore();
        getcomputernumber();
    }
    else{
        var row = tablebatting.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        row.style.backgroundColor="#ff0000";
        cell1.innerHTML=`<img src='${usernumber}.png' />`;
        cell2.innerHTML = `<img src='${compnumber}.png' />`; 
        startbtn.style.display = "none";
        batsmanheading.style.display="none";
        a.style.display="block";
        getcomputernumber();
    }
}

function computerscore(){
    if(usernumber!=compnumber){
        var row = tablebowling.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML=`<img src='${usernumber}.png' />`;
        cell2.innerHTML = `<img src='${compnumber}.png' />`; 
        incrementcomputerscore();
        getcomputernumber();
    }
    else{
        var row = tablebowling.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML=`<img src='${usernumber}.png' />`;
        cell2.innerHTML = `<img src='${compnumber}.png' />`; 
        if(computerscorecount>scorecount){
            alert(`The user number was also ${usernumber}. Game over. User Score=${scorecount} Computer Score=${computerscorecount} Computer won!`);
        }
        else {
            alert(`The user number was also ${usernumber}. Game over. User Score=${scorecount} Computer Score=${computerscorecount} User won!`);
        }
        
        location=location;
    }
}

startbtn.addEventListener('click', (e) => {
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