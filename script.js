
let cards=[] 
let sum=0
let hasBlackjack =false
let isAlive= false
let message=""
let messageEl=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let greet=document.getElementById("greetingel")





function startGame () {
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard=getRandomCard()
    sum=firstCard+secondCard
    cards=[firstCard,secondCard]
    renderGame()
}

function renderGame() {
    if (sum<=20) {
        message="Do you want to draw a new card?"
    } else if (sum===21) {
        message="You've Won congratulations "
        hasBlackjack=true
    } else {
        isAlive=false
        message="You're out of the game"
    }

    cardsEl.textContent= "Cards: " 
    
    for(let i=0; i<cards.length;i++) {
        cardsEl.textContent+=cards[i] + " "
    }

    sumEL.textContent="Sum: " + sum
    messageEl.textContent=message

}

function newCards () {
   if (isAlive==true&&hasBlackjack==false) {
    let newcard=getRandomCard()
   sum+=newcard
   cards.push(newcard)
   renderGame()
   }
}

function rollDice() {
    let randomNum = Math.floor(Math.random()*6) +1
    console.log(randomNum)
    return randomNum
    
}



function getRandomCard () {
   let jackNumber = Math.floor(Math.random()*13) +1

   if(jackNumber===1) {
       return 11
   } else if (jackNumber>10) {
       return 10
   }
   else {
       return jackNumber
   }
}

let age =27

if (age<6) {
console.log("Free")
}else if (age<=17) {
    console.log("Child")
} else if (age<=26) {
    console.log("Student")
}
else {
    console.log("Full price")
}

