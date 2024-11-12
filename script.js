let userscr=0;
let compscr=0;

//Access the Html data
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

//Random no generate by computer
const compgenerate=()=>{
    const choicesArray=["paper","scissors","rock"];
    const randIdx=Math.floor(Math.random()*3);  // for ramdom number generate Math.floor is used for generate whole no
    return choicesArray[randIdx];
}

//winner decide check from Play Game condition
const showWinner = (userWin, userChoice,compChoice)=>{
    if(userWin){
        userscr++;
        userscore.innerText=userscr;
        console.log("you win");
        msg.innerText = `You Win! your ${userChoice} Beats  ${compChoice}  😃 `;
        msg.style.backgroundColor="Green";
    }
    else{
        compscr++;
        compscore.innerText=compscr;
        console.log("computer win");
        msg.innerText = `You Lost ${compChoice} Beats Your ${userChoice} 💢 `;;
        msg.style.backgroundColor="red";
    }
}

//condition For game
const playGame=(userChoice)=>{
    console.log("user choice =", userChoice);
    const compChoice=compgenerate();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        console.log("its a tie");
        msg.innerText =`Its A Tie 😞`;
        msg.style.backgroundColor="blue";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice ==="paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissor
            userWin=compChoice === "rock"?true:false;
        }
        else{
            //rock,paper
            userWin=compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

//user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{ 
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    
    });
});


