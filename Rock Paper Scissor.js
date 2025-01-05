

let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let span1 = document.querySelector(".span1")
let board = document.querySelector(".board")

let score = 0;
let comp = 0;



img1.addEventListener("click",()=>{
let val1 = Math.ceil(0 + Math.random()*3)   
    if (val1 === 1) {
        score++
        span1.innerText = `You: ${score} Comp: ${comp}`
        board.innerText = "Congrats!! You won"
        board.style.backgroundColor = "Green"
        board.style.color = "white"
    }
    else{
        comp++
        span1.innerText = `You: ${score} Comp: ${comp}`
        board.innerText = "Uh oh!! You lost"
        board.style.backgroundColor = "Red"
        board.style.color = "white"
    }
})
img2.addEventListener("click",()=>{
 let val2 = Math.ceil(0 + Math.random()*3)  
    if ( val2 === 2) {
    
        score++

        span1.innerText = `You: ${score} Comp: ${comp}`
         board.innerText = "Congrats!! You won"
        board.style.backgroundColor = "Green"
        board.style.color = "white"
    }

    else{
        
        comp++
        span1.innerText = `You: ${score} Comp: ${comp}`
        board.innerText = "Uh oh!! You lost"
        board.style.backgroundColor = "Red"
        board.style.color = "white"
    }
})
img3.addEventListener("click",()=>{
 let val3 = Math.ceil(0 + Math.random()*3)   
    if (val3 === 3) {
    
        score++
        span1.innerText = `You: ${score} Comp: ${comp}`
        board.innerText = "Congrats!! You won"
        board.style.backgroundColor = "Green"
        board.style.color = "white"
    }
    else{
        comp++
        span1.innerText = `You: ${score} Comp: ${comp}`
         board.innerText = "Uh oh!! You lost"
        board.style.backgroundColor = "Red"
        board.style.color = "white"
    }
})

