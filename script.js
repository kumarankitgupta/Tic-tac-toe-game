const info = document.getElementById("info")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const buttons = document.getElementsByClassName('btn')
const reset = document.getElementById("reset")
const replay = document.getElementById("replay");
var over = true;
var count = 0;
var user_x = 0;
var user_o = 0;
let arr = [[1,2,3],[4,5,6],[7,8,9]];
function checkThree(a,b,c){
    if(a === b){
        if(b === c){
            return true;
        }
    }
    return false;
}
var win = false;
var Winner;
function xorO(x,y,z){
    const id = document.getElementById(z);
    if(id.textContent.trim()=="" && win == false){
            if(count % 2 == 0){
                id.textContent = 'X'
                id.style.color = "red"
                arr[x][y] = 'X'
            }else{
                id.textContent = 'O'
                id.style.color = "green"
                arr[x][y] = '0';
            }
        if(checkThree(arr[0][0],arr[1][1],arr[2][2])){
            win = true;
            Winner = arr[0][0]
        }
        else if(checkThree(arr[0][0],arr[0][1],arr[0][2])){
            win = true;
            Winner = arr[0][0]
        }
        else if(checkThree(arr[1][0],arr[1][1],arr[1][2])){
            win = true;
            Winner = arr[1][0]
        }
        else if(checkThree(arr[2][0],arr[2][1],arr[2][2])){
            win = true;
            Winner = arr[2][0]
        }
        else if(checkThree(arr[0][2],arr[1][1],arr[2][0])){
            win = true;
            Winner = arr[0][2]
        }
        else if(checkThree(arr[0][0],arr[1][0],arr[2][0])){
            win = true;
            Winner = arr[0][0]
        }
        else if(checkThree(arr[0][1],arr[1][1],arr[2][1])){
            win = true;
            Winner = arr[0][1]
        }
        else if(checkThree(arr[0][2],arr[1][2],arr[2][2])){
            win = true;
            Winner = arr[0][2]
        }
        count++;
    }
    if(win && over){
        if(Winner === "X"){
            user_x++;
            p1.innerText = user_x;
            reset.style.display = "block";
        }else{
            user_o++;
            p2.innerText = user_o;
            reset.style.display = "block";
        }
        if(user_o === 5){
            reset.style.display = "none";
            info.innerText = "O is Winner of the Game!"
            replay.style.display = "block";
            document.body.style.backgroundImage = "url('gify.gif')";
        }
        else if(user_x === 5){
            reset.style.display = "none";
            info.innerText = "X is Winner of the Game!"
            replay.style.display = "block";
            document.body.style.backgroundImage = "url('gify.gif')";
        }else{
            info.innerText = Winner + " Wins!"
        }
        over = false;
    }
    if(count == 9 && win == false){
        info.innerText = "Draw!"
        reset.style.display = "block";
    }
}
function resetAgain(){
    reset.style.display = "none";
    win = false;
    arr = [[1,2,3],[4,5,6],[7,8,9]]
    count = 0;
    info.innerText = "";
    for(let i = 0 ; i < buttons.length ; i++)
    buttons[i].innerHTML="&nbsp;";
    over = true;
   }
function reload(){
    location.reload();
}

