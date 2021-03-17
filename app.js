const p1Button = document.querySelector("#p1Button")
const p2Button = document.querySelector("#p2Button")
const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")
const gameReset = document.querySelector("#gameReset")
const Wscore = document.querySelector("#Score")

let p1Score = 0
let p2Score = 0
let StillPlay = false
Wscoreg = parseInt(Wscore.value)

p1Button.addEventListener('click', function (){
    if (!StillPlay){
        p1Score += 1
        if (p1Score === Wscoreg){
            p1Display.style.color = 'green'
            p2Display.style.color = 'red'
            p1Button.disabled = true
            p2Button.disabled = true
            StillPlay = true;
        }
        p1Display.textContent = p1Score
    }
});

p2Button.addEventListener('click', function (){
    if (!StillPlay){
        p2Score += 1
        if (p2Score === Wscoreg){
            p2Display.style.color = 'green'
            p1Display.style.color = 'red'
            p1Button.disabled = true
            p2Button.disabled = true
            StillPlay = true;
        }
        p2Display.textContent = p2Score
    }
});

Wscore.addEventListener('change', function(){
    Wscoreg = parseInt(this.value);
    reset()
})

gameReset.addEventListener('click', reset)

function reset (){
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    StillPlay = false
    Wscoreg = parseInt(Wscore.value);
    p1Display.style.color = "black"
    p2Display.style.color = "black"
    p1Button.disabled = false
    p2Button.disabled = false
}
