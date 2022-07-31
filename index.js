let home = document.getElementById("home-socre")
let guest = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0


function homeplus1() {
    
 homeScore = homeScore + 1 
 home.textContent = homeScore  
   
}

function homeplus2() {
 
 homeScore = homeScore + 2 
 home.textContent = homeScore  
   
}

function homeplus3() {

homeScore = homeScore + 3
home.textContent = homeScore  

}

function guestplus1() {

guestScore = guestScore + 1
guest.textContent = guestScore
    
}
    

function guestplus2() {
    
guestScore = guestScore + 2
guest.textContent = guestScore
       
    
}

function guestplus3() {

guestScore = guestScore + 3
guest.textContent = guestScore
    
    
}

function newGame() {
    
homeScore = 0
home.textContent = homeScore 
guestScore = 0 
guest.textContent = guestScore

    
}